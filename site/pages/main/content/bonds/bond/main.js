import title from "./title/main.js"
import info from "./info/main.js"

export default function bond(b){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:48%;
            height:fit-content;
            margin:5px;
            box-shadow:0px 0px 2px 0px var(--colorWhite);
            border-radius:5px;
        }
        :responsive{
            width:100%;
        }`

    const bond = cE("div",style)
    bond.appendChild(title(`${b.nome_titulo} - venc. ${b.data_vencimento}`))
    bond.appendChild(info(b))
    return(bond)
}