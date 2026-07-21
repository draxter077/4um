import basic from "./basic/main.js"
import graphs from "./graphs/main.js"
import wallet from "./wallet/main.js"

export default function info(f){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:70%;
            height:100%;
            padding:10px 15px;
            box-shadow:0px 0px 2px 0px var(--colorWhite);
            border-radius:10px;
            overflow:scroll;
            opacity:0;
            transition:opacity 0.5s;
        }
        :responsive{
            width:100%;
            height:100%;
            margin:5px 0px 0px;
        }`

    const info = cE("div",style)
    info.appendChild(basic(f))
    if(f.carteira && f.carteira.length > 0){info.appendChild(wallet(f.carteira))}
    if(f.informe_diario && f.informe_diario.length > 0){info.appendChild(graphs(f.informe_diario))}
    return(info)
}