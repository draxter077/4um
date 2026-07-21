import sql from "../../../sql/main.js";

export default async function bonds(req, res){
    const { nome_titulo, data_vencimento } = req.body;
    const result = await sql(`
        WITH ultimas_datas AS (
            SELECT nome_titulo, data_vencimento, MAX(TO_DATE(data_referencia, 'DD/MM/YYYY')) AS max_dt 
            FROM public.negociacao_titulos_publicos 
            WHERE nome_titulo = '${nome_titulo}' AND data_vencimento = '${data_vencimento}'
            GROUP BY nome_titulo, data_vencimento
        ), 
        dados_consolidados AS (
            SELECT 
                n.nome_titulo, 
                n.data_vencimento, 
                MAX(n.data_referencia) AS data_referencia, 
                MAX(n.isin) AS isin, 
                MAX(CASE WHEN n.provedor = 'ANBIMA 12H' THEN n.fechamento_anterior END) AS fechamento_anterior, 
                MAX(CASE WHEN n.provedor = 'ANBIMA 12H' THEN n.indicativo_superior END) AS indicativo_superior, 
                MAX(CASE WHEN n.provedor = 'ANBIMA 12H' THEN n.indicativo_inferior END) AS indicativo_inferior, 
                MAX(CASE WHEN n.provedor = 'ANBIMA 12H' THEN n.valor_oferta_compra END) AS valor_oferta_compra, 
                MAX(CASE WHEN n.provedor = 'ANBIMA 12H' THEN n.valor_oferta_venda END) AS valor_oferta_venda, 
                MAX(n.taxa_maxima) AS taxa_maxima, 
                MAX(n.taxa_media) AS taxa_media, 
                MAX(n.taxa_minima) AS taxa_minima, 
                MAX(n.valor_ultima) AS valor_ultima, 
                MAX(n.numero_negocios) AS numero_negocios, 
                MAX(n.quantidade_negociada) AS quantidade_negociada, 
                MAX(n.volume_negociado) AS volume_negociado 
            FROM public.negociacao_titulos_publicos n 
            INNER JOIN ultimas_datas ud ON n.nome_titulo = ud.nome_titulo AND n.data_vencimento = ud.data_vencimento AND TO_DATE(n.data_referencia, 'DD/MM/YYYY') = ud.max_dt 
            WHERE n.provedor IN ('ANBIMA 12H', 'SELIC') 
            GROUP BY n.nome_titulo, n.data_vencimento
        ), 
        ultimas_5_datas_calls AS (
            SELECT nome_titulo, data_vencimento, dt_ref 
            FROM (
                SELECT DISTINCT nome_titulo, data_vencimento, TO_DATE(data_referencia, 'DD/MM/YYYY') AS dt_ref, 
                DENSE_RANK() OVER (PARTITION BY nome_titulo, data_vencimento ORDER BY TO_DATE(data_referencia, 'DD/MM/YYYY') DESC) as rnk 
                FROM public.negociacao_titulos_publicos 
                WHERE provedor = 'CALL' AND nome_titulo = '${nome_titulo}' AND data_vencimento = '${data_vencimento}'
            ) sub 
            WHERE rnk <= 5
        ), 
        calls_agrupadas AS (
            SELECT 
                c.nome_titulo, 
                c.data_vencimento, 
                json_agg(
                    json_build_object(
                        'data_referencia', c.data_referencia, 
                        'hora_referencia', c.horario_referencia, 
                        'valor_oferta_compra', c.valor_oferta_compra, 
                        'valor_oferta_venda', c.valor_oferta_venda
                    ) ORDER BY TO_DATE(c.data_referencia, 'DD/MM/YYYY') DESC, c.horario_referencia ASC
                ) AS calls 
            FROM public.negociacao_titulos_publicos c 
            INNER JOIN ultimas_5_datas_calls u ON c.nome_titulo = u.nome_titulo AND c.data_vencimento = u.data_vencimento AND TO_DATE(c.data_referencia, 'DD/MM/YYYY') = u.dt_ref 
            WHERE c.provedor = 'CALL' 
            GROUP BY c.nome_titulo, c.data_vencimento
        ) 
        SELECT 
            dc.data_referencia, 
            dc.nome_titulo, 
            dc.data_vencimento, 
            dc.isin, 
            dc.fechamento_anterior, 
            dc.indicativo_superior, 
            dc.indicativo_inferior, 
            dc.taxa_maxima, 
            dc.taxa_media, 
            dc.taxa_minima, 
            dc.valor_ultima, 
            dc.numero_negocios, 
            dc.quantidade_negociada, 
            dc.volume_negociado, 
            dc.valor_oferta_compra, 
            dc.valor_oferta_venda, 
            COALESCE(ca.calls, '[]'::json) AS calls 
        FROM dados_consolidados dc 
        LEFT JOIN calls_agrupadas ca ON dc.nome_titulo = ca.nome_titulo AND dc.data_vencimento = ca.data_vencimento;
    `)
    const bondData = result.rows[0] || null;

    console.log(`>> 4um/bonds/get ${nome_titulo} ${data_vencimento}`);
    return res.status(200).send(bondData).end();
}