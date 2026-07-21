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

export default function graph(t,vs){
    let style = `
        {
            position:relative;
            width:100%;
            height:250px;
        }
        :responsive{
            height:150px;
        }`

    const graph = cE("div", style)

    let value = '';
    if(t.includes("Patrimônio")){value = "valor_patrimonio_liquido";}
    else if(t.includes("quota")){value = "valor_quota";}
    else if(t.includes("Captação")){value = "captacao_dia";}
    else if(t.includes("total")){value = "valor_total";}

    let highestRent = vs[0][value], lowestRent = vs[0][value]
    for(let i = 0; i < vs.length; i++){
        let r = vs[i][value]
        if(r > highestRent){highestRent = r}
        if(r < lowestRent){lowestRent = r}
    }
    for(let i = 0; i < 5; i++){
        let unit = (highestRent - lowestRent)/4
        let x = "2.5%"
        let y = (7.5 + 20*i).toString() + "%"
        let t = stringifyN(highestRent - unit*i)
        let y2 = (10 + 20*i).toString() + "%"
        graph.appendChild(label(x,y,t))
        graph.appendChild(line(y2))
    }

    for(let i = 0; i < vs.length; i++){
        const r = vs[i]
        let unitX = 80/(vs.length - 1)
        let x = (10 + unitX*(i)).toString() + "%"
        let x2 = (5 + unitX*(i)).toString() + "%"
        let y = "92.5%"
        let y2 = (90 - 80*((r[value] - lowestRent)/(highestRent - lowestRent))).toString() + "%"
        graph.appendChild(label(x2, y, r.data_competencia))
        if(i > 0){
            const lR = vs[i-1];
            graph.appendChild(curve(
                (10 + unitX*(i-1)).toString() + "%",
                (90 - 80*((lR[value] - lowestRent)/(highestRent - lowestRent))).toString() + "%",
                x,
                y2,
                r[value] > lR[value] ? 1 : 0
            ))
        }
    }
    return(graph)
}