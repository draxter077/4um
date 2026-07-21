import sql from "../../sql/main.js";

export default async function init(req, res) {
    const fisResult = await sql(`
        SELECT c.cnpj, c.nome 
        FROM fi_cadastro c
        WHERE EXISTS (
            SELECT 1 FROM fi_informe i WHERE i.cnpj = c.cnpj
        )
        OR EXISTS (
            SELECT 1 FROM fi_carteira ca WHERE ca.cnpj = c.cnpj
        )
        ORDER BY c.nome;
    `);

    console.log(`>> 4um/init`);
    res.status(200).send({funds:fisResult.rows}).end();
}