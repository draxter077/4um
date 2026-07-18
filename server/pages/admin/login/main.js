import sql from "../../../sql/main.js"

export default async function login(req, res){
    const admin = req.body.admin
    const password = req.body.password
    let status, data = {}
    
    if(admin == "admin"){
        if(password == "admin"){
            let is = await sql(`SELECT * FROM is`);
            is = is.rows

            data = {
                is:is
            }
            
            status = 200
        }
        else{status = 403} // A senha está incorreta
    }
    else{
        status = 403 // O admin está incorreto
    }

    console.log(`>> NOME/admin/login ${status}`)
    res.status(status).send(data).end()
}