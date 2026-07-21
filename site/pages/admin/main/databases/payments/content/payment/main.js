import row from "./row/main.js"

export default function payment(){
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

    const payment = cE("div",style)
    payment.appendChild(row("80px","p123456"))
    payment.appendChild(row("80px","c123456"))
    payment.appendChild(row("120px","00/00/0000"))
    payment.appendChild(row("300px","Plano Completo - Mês"))
    payment.appendChild(row("120px","R$ 259,99"))
    payment.appendChild(row("120px","Em aberto"))
    return(payment)
}