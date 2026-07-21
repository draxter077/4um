import row from "./row/main.js"

export default function data(b){
    let style = `{
        display:flex;
        flex-direction:column;
        width:40%;
        height:100%;
        padding:10px 15px;
        overflow:scroll;
    }
    :responsive{
        width:50%;
    }`

    const data = cE("cE",style)
    data.appendChild(row("Data de referência", b.data_referencia))
    data.appendChild(row("Código ISIN", b.isin))
    data.appendChild(row("Fechamento anterior", Math.round(b.fechamento_anterior*10000)/100 + "%"))
    data.appendChild(row("Indicativo superior", Math.round(b.indicativo_superior*10000)/100 + "%"))
    data.appendChild(row("Indicativo inferior", Math.round(b.indicativo_inferior*10000)/100 + "%"))
    data.appendChild(row("Taxa máxima", Math.round(b.taxa_maxima*10000)/100 + "%"))
    data.appendChild(row("Taxa média", Math.round(b.taxa_media*10000)/100 + "%"))
    data.appendChild(row("Taxa mínima", Math.round(b.taxa_minima*10000)/100 + "%"))
    data.appendChild(row("Último valor", Math.round(b.valor_ultima*10000)/100 + "%"))
    data.appendChild(row("Número de negócios", b.numero_negocios))
    data.appendChild(row("Quantidade negociada", b.quantidade_negociada))
    data.appendChild(row("Volume negociado", stringifyNumber(b.volume_negociado || 0)))
    return(data)
}