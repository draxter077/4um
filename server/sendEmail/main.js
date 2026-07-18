import axios from "axios"
import some_type from "./types/some_type.js"

async function configureEmailZoho(){
    // Get the authToken to see accountId
    // Go to https://accounts.zoho.com/developerconsole
    // Get clientId and clientSecret
    let clientID = ""
    let clientSecret = ""
    let redirectURL = "https://www.google.com"

    // No navegador, copie e cole o endereço abaixo
    // https://accounts.zoho.com/oauth/v2/auth?client_id=${clientID}&response_type=code&redirect_uri=${redirectURL}&scope=${scope}&access_type=offline
    // https://accounts.zoho.com/oauth/v2/auth?client_id=1000.8VJXTOR79HPOLS2P8C062NFFD1OC1G&response_type=code&redirect_uri=https://www.google.com&scope=ZohoMail.messages.ALL&access_type=offline&prompt=consent

    let authCode0 = ""
    let authCode1 = ""

    let getIDToken = ""
    await axios.post(`https://accounts.zoho.com/oauth/v2/token?code=${authCode0}&grant_type=authorization_code&client_id=${clientID}&client_secret=${clientSecret}&redirect_uri=${redirectURL}&scope=ZohoMail.accounts.ALL`)
        .then(r => getIDToken = r.data.access_token)
        .catch(r => console.log("Falha no getIDToken"))

    axios.defaults.headers.common["Authorization"] = "Zoho-oauthtoken " + getIDToken
    await axios.get("https://mail.zoho.com/api/accounts")
        .then(r => console.log(r.data.data[0].accountId))
        .catch(r => console.log("Erro ao pegar o accountID"))

    // Get the refreshToken to send e-mail
    await axios.post(`https://accounts.zoho.com/oauth/v2/token?code=${authCode1}&grant_type=authorization_code&client_id=${clientID}&client_secret=${clientSecret}&redirect_uri=${redirectURL}&scope=ZohoMail.messages.ALL`)
        .then(r => console.log(r.data.refresh_token))
        .catch(r => console.log("Falha no getRefreshToken"))
}

async function sendEmail(toAddress, subject, content){
    let clientID = ''
    let clientSecret = ''
    let refreshToken = ''
    let accountID = ''
    await axios.post(`https://accounts.zoho.com/oauth/v2/token?client_id=${clientID}&client_secret=${clientSecret}&grant_type=refresh_token&refresh_token=${refreshToken}`)
        .then(async resposta => {
            axios.defaults.headers.common["Authorization"] = "Zoho-oauthtoken " + resposta.data.access_token

            const body = {
                fromAddress: "NAME <EMAIL>",
                toAddress: toAddress,
                subject: subject,
                content: content,
                mailFormat: "html",
                encoding: "UTF-8",
                askReceipt: "no"
            }

            await axios.post(`https://mail.zoho.com/api/accounts/${accountID}/messages`, body)
                .then(resposta => {})
                .catch(response => {
                    console.log(response.response.data.data)
                })
        })
        .catch(response => {console.log("ERRO **emitir token do ZohoMail**: " + content)})
}

export default async function main(toAddress, type, data){
    if(type == "CERTAIN_TYPE"){await sendEmail(toAddress, "CERTAIN_SUBJECT", some_type(data))}
}