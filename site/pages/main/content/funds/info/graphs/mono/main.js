import title from "./title/main.js"
import graph from "./graph/main.js"

export default function mono(t,rs){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:49%;
            height:fit-content;
            margin:5px;
            box-shadow:0px 0px 2px 0px var(--colorWhite);
            border-radius:5px;
        }
        :responsive{
            width:100%;
        }`

    const mono = cE("div",style)
    mono.appendChild(title(t))
    mono.appendChild(graph(t,rs))
    return(mono)
}