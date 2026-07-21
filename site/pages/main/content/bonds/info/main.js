import graph from "./graph/main.js"
import data from './data/main.js'

export default function info(b){
    let style = `{
        display:flex;
        flex-direction:row;
        align-items:center;
        width:70%;
        height:100%;
        padding:10px 15px;
        box-shadow:0px 0px 2px 0px var(--colorWhite);
        border-radius:10px;
        opacity:0;
        transition:opacity 0.5s;
    }
    :responsive{
        flex-direction:column;
        width:100%;
        height:100%;
        margin:5px 0px 0px;
    }`

    const info = cE("div",style)
    if(b.calls && b.calls.length > 0){info.appendChild(graph(b))}
    info.appendChild(data(b))
    return(info)
}