import row from "./row/main.js"

export default function client(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-around;
            flex-wrap:wrap;
            font-size:16px;
            color:var(--colorWhite);
            padding:2px 5px;
            border-bottom:1px solid var(--colorWhite);
            width:100%;
        }`

    const client = cE("div",style)
    client.appendChild(row("80px","c123456"))
    client.appendChild(row("250px","Nome da Empresa LTDA"))
    client.appendChild(row("200px","00.000.000/0001-00"))
    client.appendChild(row("200px","usuario@email.com.br"))
    client.appendChild(row("180px","(00) 90000-0000"))
    client.appendChild(row("200px","domain.com.br"))
    return(client)
}