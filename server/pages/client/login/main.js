import sql from "../../../sql/main.js"

export default async function login(req, res){
    const email = req.body.email
    const password = req.body.password
    let status, data = {}
    let r = await sql(`SELECT * FROM clients WHERE email='${email}'`)
    r = r.rows[0]
    
    if(r){
        let clientID = r.id
        if(password == r.password){
            let is = await sql(`SELECT * FROM is WHERE id='${clientID}'`);
            is = is.rows

            data = {
                is:is
            }
            
            status = 200
        }
        else{status = 403} // A senha está incorreta
    }
    else{
        status = 404 // O domínio não foi encontrado
    }

    console.log(`>> NOME/client/login ${status} | ${status == 200 ? r[0].id : ""}`)
    res.status(status).send(data).end()
}