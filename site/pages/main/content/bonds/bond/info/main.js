import graph from "./graph/main.js"
import data from './data/main.js'

export default function info(b){
    let style = `{
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        align-items:center;
        width:100%;
        height:300px;
    }
    :responsive{
        height:200px;
    }`

    const info = cE("div",style)
    info.appendChild(graph(b))
    info.appendChild(data(b))
    return(info)
}