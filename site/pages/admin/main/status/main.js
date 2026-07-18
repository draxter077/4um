import item from "./item/main.js"

export default function status(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-around;
            align-items:center;
            width:80%;
        }`

    const status = cE("div",style)
    status.appendChild(item("Valor","Título"))
    status.appendChild(item("Valor","Título"))
    status.appendChild(item("Valor","Título"))
    return(status)
}