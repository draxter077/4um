import item from "./item/main.js"

export default function status(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-around;
            align-items:center;
            flex-wrap:wrap;
            width:80%;
        }`

    const status = cE("div",style)
    status.appendChild(item("R$ 000,00","A ser aprovado"))
    status.appendChild(item("R$ 000,00","Aprovado"))
    status.appendChild(item("R$ 000,00","Último mês"))
    return(status)
}