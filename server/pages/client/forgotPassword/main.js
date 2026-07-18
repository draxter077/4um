import { makeId } from "../../../data.js"
import sql from "../../../sql/main.js"
import sendEmail from "../../../sendEmail/main.js"

export default async function forgotPassword(req, res){
    const email = req.body.email
    let r = await sql(`SELECT * FROM clients WHERE email='${email}'`);
    r = r.rows[0]
    let status

    if(r){
        let newPass = await makeId(sql, 10, "z")
        await sql(`UPDATE clients SET password='${newPass}' WHERE email='${email}'`)
        await sendEmail(email, "temporaryPassword", {newPassword:newPass})
        status = 200
    }
    else{
        status = 404 // E-mail não encontrado
    }
    console.log(`>> NOME/client/forgotPassword ${status}`)
    res.status(status).end()
}