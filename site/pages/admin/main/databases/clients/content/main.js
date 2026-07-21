import client from "./client/main.js"

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
    content.id = "contentClients"
    content.appendChild(client())
    content.appendChild(client())
    content.appendChild(client())
    content.appendChild(client())
    content.appendChild(client())
    content.appendChild(client())
    content.appendChild(client())
    content.appendChild(client())
    content.appendChild(client())
    content.appendChild(client())
    content.appendChild(client())
    content.appendChild(client())
    content.appendChild(client())
    content.appendChild(client())
    content.appendChild(client())
    content.appendChild(client())
    content.appendChild(client())
    content.appendChild(client())
    content.appendChild(client())
    content.appendChild(client())
    return(content)
}