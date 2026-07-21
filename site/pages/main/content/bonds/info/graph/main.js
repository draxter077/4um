import label from "./label/main.js"
import line from "./line/main.js"
import curve from "./curve/main.js"

function stringifyN(n){
    let n_string = n.toString()
    n = Math.round(n*100)/100;
    if(n >= 1000000){n_string = Math.round(n/1000000) + "M"}
    else if(n >= 1000){n_string = Math.round(n/1000) + "K"}
    else{n_string = n}
    return n_string
}

export default function graph(b){
    let style = `
        {
            position:relative;
            width:60%;
            height:95%;
        }
        :responsive{
            width:100%;
            height:60%;
        }`

    const graph = cE("div", style)

    let highestRent = b.calls[0].valor_oferta_compra, lowestRent = b.calls[0].valor_oferta_compra
    for(let i = 0; i < b.calls.length; i++){
        let rV = b.calls[i].valor_oferta_venda
        let rC = b.calls[i].valor_oferta_compra

        if(rV > highestRent){highestRent = rV}
        if(rV < lowestRent){lowestRent = rV}
        if(rC > highestRent){highestRent = rC}
        if(rC < lowestRent){lowestRent = rC}
    }

    for(let i = 0; i < 5; i++){
        let unit = (highestRent - lowestRent)/4
        let x = "2.5%"
        let y = (9 + 20*i).toString() + "%"
        let t = Math.round((highestRent - unit*i)*10000)/100 + "%"
        let y2 = (10 + 20*i).toString() + "%"
        graph.appendChild(label(x,y,t))
        graph.appendChild(line(y2))
    }

    for(let i = 0; i < b.calls.length; i++){
        const r = b.calls[i]
        let unitX = 80/(b.calls.length - 1)
        let x = (10 + unitX*(i)).toString() + "%"
        let x2 = (5 + unitX*(i)).toString() + "%"
        let y = "92.5%"
        if(i == 0 || i == b.calls.length - 1){graph.appendChild(label(x2, y, r.hora_referencia))}
        if(i > 0){
            const lR = b.calls[i-1];
            graph.appendChild(curve(
                (10 + unitX*(i-1)).toString() + "%",
                (90 - 80*((lR.valor_oferta_compra - lowestRent)/(highestRent - lowestRent))).toString() + "%",
                x,
                (90 - 80*((r.valor_oferta_compra - lowestRent)/(highestRent - lowestRent))).toString() + "%",
                r.valor_oferta_compra > lR.valor_oferta_compra ? 1 : 0,
                1
            ))
            graph.appendChild(curve(
                (10 + unitX*(i-1)).toString() + "%",
                (90 - 80*((lR.valor_oferta_venda - lowestRent)/(highestRent - lowestRent))).toString() + "%",
                x,
                (90 - 80*((r.valor_oferta_venda - lowestRent)/(highestRent - lowestRent))).toString() + "%",
                r.valor_oferta_venda > lR.valor_oferta_venda ? 1 : 0,
                0
            ))
        }
    }
    return(graph)
}