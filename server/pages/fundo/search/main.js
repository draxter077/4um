import sql from "../../../sql/main.js";

export default async function searchFunds(req, res){
    const text = req.body.text;
    const termo = text.trim();
    const result = await sql(`
        SELECT cnpj, nome
        FROM fi_cadastro
        WHERE cnpj ILIKE '%${termo}%' OR nome ILIKE '%${termo}%'
        ORDER BY RANDOM()
        LIMIT 20;
    `);
    const fundsList = result.rows;
    const total = await sql(`SELECT COUNT(*) FROM fi_cadastro;`)
    console.log(`>> 4um/fundo/search "${termo}"`);
    return res.status(200).send({funds:fundsList, total:total.rows[0].count}).end();
}