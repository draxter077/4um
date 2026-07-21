import sql from "../../../sql/main.js";

export default async function searchBonds(req, res){
    const text = req.body.text || "";
    const termo = text.trim();
    const termoApenasNumeros = termo.replace(/[^\w\s]/gi, '');
    const result = await sql(`
        SELECT nome_titulo, data_vencimento
            FROM (
                SELECT DISTINCT nome_titulo, data_vencimento
                FROM public.negociacao_titulos_publicos
                WHERE 
                    nome_titulo ILIKE '%${termo}%' 
                    OR data_vencimento ILIKE '%${termo}%'
                    OR REGEXP_REPLACE(data_vencimento, '[^0-9]', '', 'g') ILIKE '%${termoApenasNumeros}%'
            ) AS titulos_unicos
            ORDER BY RANDOM()
            LIMIT 20;
    `);
    const bondsList = result.rows;
    const total = await sql(`SELECT COUNT(DISTINCT nome_titulo || '-' || data_vencimento) FROM negociacao_titulos_publicos;`)
    console.log(`>> 4um/bonds/search "${termo}"`);
    return res.status(200).send({bonds:bondsList, total:total.rows[0].count}).end();
}