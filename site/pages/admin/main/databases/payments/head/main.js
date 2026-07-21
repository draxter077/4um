import search from "./search/main.js"
import button from "./button/main.js"

export default function head(p){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-between;
            width:100%;
        }`

    const head = cE("div",style)
    head.appendChild(search())

    let d = new Date().getDate()
    // Check payments too
    if(d == 13){head.appendChild(button())}
    return(head)
}