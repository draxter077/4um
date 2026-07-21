import row from "./row/main.js"

export default function order(){
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

    const order = cE("div",style)
    order.appendChild(row("120px","00/00/0000"))
    order.appendChild(row("80px","c123456"))
    order.appendChild(row("300px","Remover sei lá o que sei lá o que"))
    order.appendChild(row("120px","Em curso"))
    return(order)
}