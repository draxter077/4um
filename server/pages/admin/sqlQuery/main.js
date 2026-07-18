import sql from "../../../sql/main.js"

export default async function sqlQuery(req, res){
    const query = req.body.query
    let q = await sql(query)
    console.log(`>> NOME/admin/sqlQuery ${query.split(" ")[0]}`)
    res.status(200).data(q).end()
}