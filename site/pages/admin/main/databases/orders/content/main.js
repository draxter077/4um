import order from "./order/main.js"

export default function content(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:100%;
            height:100%;
            overflow:scroll;
            white-space:nowrap;
        }`

    const content = cE("div",style)
    content.id = "contentOrders"
    content.appendChild(order())
    content.appendChild(order())
    content.appendChild(order())
    content.appendChild(order())
    content.appendChild(order())
    content.appendChild(order())
    content.appendChild(order())
    content.appendChild(order())
    content.appendChild(order())
    content.appendChild(order())
    content.appendChild(order())
    content.appendChild(order())
    content.appendChild(order())
    content.appendChild(order())
    content.appendChild(order())
    content.appendChild(order())
    content.appendChild(order())
    content.appendChild(order())
    content.appendChild(order())
    content.appendChild(order())
    return(content)
}