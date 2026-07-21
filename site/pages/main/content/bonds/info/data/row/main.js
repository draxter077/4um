import title from "./title/main.js"
import value from "./value/main.js"

export default function row(t,v){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            width:100%;
            justify-content:space-between;
        }`

    const row = cE("div",style)
    row.appendChild(title(t))
    row.appendChild(value(v))
    return(row)
}