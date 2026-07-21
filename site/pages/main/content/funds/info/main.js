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
            height:70svh;
        }`

    const info = cE("div",style)
    info.appendChild(basic(f))
    info.appendChild(wallet(f.carteira))
    info.appendChild(graphs(f.informe_diario))
    return(info)
}

// carteira [data, tipo aplicação, tipo ativo, descricao ativo, qtd venda, valor venda, qtd aquisição, valor aquisição, qtd posição final, valor mercado posição final, valor custo posição final, id_doc]