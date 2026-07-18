export default function button() {
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            height:40px;
            width:20%;
            font-size:16px;
            font-weight:900;
            text-align:center;
            background:white;
            color:black;
            border-radius:5px;
            cursor:pointer;
        }
        :responsive{
            height:30px;
            width:33%;
        }
        >div{
            width:40px;
            height:50%;
            border-radius:10px;
            background:black;
            animation:loading2 2s linear 0s infinite alternate;
        }`

    const button = cE("div", style)
    button.innerHTML = "Enviar"

    button.addEventListener(
        "click",
        async function a(e) {
            button.removeEventListener("click", a)
            button.innerHTML = `<div></div>`
            await new Promise(r => setTimeout(r, 2000))
            const input = e.target.parentElement.children[0]

            if(input.value){
                const query = input.value
                if(!query.includes("DELETE FROM") && !query.includes("UPDATE") && !query.includes("SELECT")){
                    input.value = `Comando inválido [DELETE FROM, UPDATE, SELECT] | ${query}`
                }
                else if(!query.includes("clients") && !query.includes("orders") && !query.includes("payments")){
                    input.value = `Tabela inválida [clients, orders, payments] | ${query}`
                }
                else if(!query.includes("WHERE")){
                    input.value = `Comando sem WHERE | ${query}`
                }
                else if(query.includes('"')){
                    input.value = `Comando com aspas duplas | ${query}`
                }
                else {
                    // axios.post(`${api_url}/admin/sqlQuery`,{query:query})
                    // .then(async r => {
                    //     console.log(r.data)
                    //     input.innerHTML = `Enviado | ${query}`
                    // })
                    // .catch(async r => {
                    //     input.innerHTML = "Tente mais tarde"
                    // })
                    input.value = `Enviado | ${query}`
                }
            }
            button.innerHTML = "Enviar"
            button.addEventListener("click", a)
        }
    )
    return (button)
}