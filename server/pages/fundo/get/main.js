import sql from "../../../sql/main.js";

export default async function funds(req, res){
    const CNPJ = req.body.cnpj;

    const fisResult = await sql(`SELECT * FROM fi_cadastro WHERE cnpj='${CNPJ}';`);
    const fis = fisResult.rows;

    const informesResult = await sql(`SELECT * FROM fi_informe WHERE cnpj='${CNPJ}' ORDER BY data_competencia DESC LIMIT 6;`);
    const carteirasResult = await sql(`
        WITH ultima_data AS (
            SELECT MAX(data_competencia) as max_data
            FROM fi_carteira
            WHERE cnpj='${CNPJ}'
        ),
        patrimonio AS (
            SELECT MAX(valor_patrimonio_liquido) as pl
            FROM fi_carteira c
            INNER JOIN ultima_data ud ON c.data_competencia = ud.max_data
            WHERE c.cnpj='${CNPJ}'
        )
        SELECT 
            c.cnpj,
            c.tipo_aplicacao AS tipo,
            SUM(c.valor_mercado_posicao_final) AS valor,
            p.pl AS patrimonio_liquido
        FROM fi_carteira c
        INNER JOIN ultima_data ud ON c.data_competencia = ud.max_data
        CROSS JOIN patrimonio p
        WHERE c.cnpj='${CNPJ}'
        GROUP BY c.cnpj, c.tipo_aplicacao, p.pl;
    `);

    const plInforme = Number(informesResult.rows[0]?.patrimonio_liquido) || 0;
    const carteira = carteirasResult.rows.map(row => {
        const valor = Number(row.valor) || 0;
        let pl = Number(row.patrimonio_liquido) || 0;
        if (pl <= 0) {pl = plInforme;}
        return {
            tipo: row.tipo,
            valor: valor,
        };
    });

    const fi = fis[0];
    const fund = {
        cnpj: fi.cnpj,
        nome: fi.nome,
        situacao: fi.situacao,
        data_situacao: fi.data_situacao,
        classe: fi.classe,
        classe_anbima: fi.classe_anbima,
        codigo_cvm: fi.codigo_cvm,
        rentabilidade: fi.rentabilidade,
        condominio: fi.condominio,
        taxa_administracao: fi.taxa_administracao,
        diretor: fi.diretor,
        gestor: fi.gestor,
        auditor: fi.auditor,
        controlador: fi.controlador,
        informe_diario: informesResult.rows,
        carteira: carteira
    };

    console.log(`>> 4um/fundo/get ${CNPJ}`);
    return res.status(200).send(fund).end();
}