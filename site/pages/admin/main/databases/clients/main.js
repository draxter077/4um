import head from "./head/main.js"
import content from "./content/main.js"

export default function clients(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:33%;
            height:100%;
            background:var(--colorDarkerBlue);
            padding:10px 15px;
            box-shadow:0px 0px 3px 0px var(--colorBlue);
            border-radius:10px;
        }
        :responsive{
            height:33%;
            width:100%;
        }`

    const clients = cE("div",style)
    clients.appendChild(head())
    clients.appendChild(content())
    return(clients)
}