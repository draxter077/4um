import menu from "./menu/main.js"
import logo from "./logo/main.js"
import info_bot from "./info_bot/main.js"

export default function head(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-around;
            width:100%;
        }`

    const head = cE("div",style)
    head.appendChild(menu())
    head.appendChild(logo())
    head.appendChild(info_bot())
    return(head)
}