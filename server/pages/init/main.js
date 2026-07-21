import sql from "../../sql/main.js";

export default async function init(req, res) {
    const fisResult = await sql(`
        SELECT DISTINCT c.cnpj, c.nome 
        FROM fi_cadastro c
        INNER JOIN fi_informe i ON c.cnpj = i.cnpj
        INNER JOIN fi_carteira ca ON c.cnpj = ca.cnpj
        ORDER BY c.nome;
    `);

    console.log(`>> 4um/init`);
    res.status(200).send({funds:fisResult.rows}).end();
}