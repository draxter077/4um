import text from "./text/main.js"
import icon from "./icon/main.js"

export default function query(q){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-between;
            width:100%;
        }`

    const query = cE("div",style)
    query.appendChild(text(q))
    query.appendChild(icon())
    return(query)
}