export default function button() {
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            height:30px;
            width:33%;
            font-size:16px;
            font-weight:900;
            text-align:center;
            background:var(--colorBlue) !important;
            color:var(--colorWhite);
            border-radius:5px;
            cursor:pointer;
        }
        >div{
            width:40px;
            height:50%;
            border-radius:10px;
            background:var(--colorWhite);
            animation:loading2 2s linear 0s infinite alternate;
        }`

    const button = cE("div", style)
    button.innerHTML = "Novo mês"

    button.addEventListener(
        "click",
        async function a(){
            button.removeEventListener("click", a)
            button.innerHTML = `<div></div>`
            await new Promise(r => setTimeout(r,2000))

            // axios.get(`${api_url}/admin/addPayments`)
            // .then(async r => {
            //     button.innerHTML = `Enviado`
            // })
            // .catch(async r => {
            //     button.innerHTML = "Tente mais tarde"
            // })

            button.innerHTML = "Enviado"
        }
    )
    return (button)
}