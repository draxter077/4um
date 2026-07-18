import payment from "./payment/main.js"

export default function content(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:100%;
            height:100%;
            overflow:scroll;
            white-space:nowrap;
        }
        :responsive{
            overflow-x:scroll;
        }`

    const content = cE("div",style)
    content.appendChild(payment())
    content.appendChild(payment())
    content.appendChild(payment())
    content.appendChild(payment())
    content.appendChild(payment())
    content.appendChild(payment())
    content.appendChild(payment())
    content.appendChild(payment())
    content.appendChild(payment())
    content.appendChild(payment())
    content.appendChild(payment())
    content.appendChild(payment())
    content.appendChild(payment())
    content.appendChild(payment())
    content.appendChild(payment())
    content.appendChild(payment())
    content.appendChild(payment())
    content.appendChild(payment())
    content.appendChild(payment())
    content.appendChild(payment())
    return(content)
}