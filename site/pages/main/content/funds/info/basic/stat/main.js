import title from "./title/main.js"
import value from "./value/main.js"

export default function stat(t,v){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:flex-start;
            width:fit-content;
            padding:10px 15px;
            margin:5px;
            border-radius:5px;
            box-shadow:0px 0px 2px 0px var(--colorWhite);
            overflow:hidden;
        }
        :responsive{
            margin:5px 0px;
            width:49%;
        }`

    const stat = cE("div",style)
    stat.appendChild(title(t))
    stat.appendChild(value(v))
    return(stat)
}