import chat from "./chat/main.js"

export default function stats(){
    let style = `
        {
            position:absolute;
            top:0%;
            left:0%;
            display:none;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            width:100%;
            height:100%;
            opacity:0;
            transition:all 0.5s;
        }`

    const stats = cE("div",style)
    stats.id = "stats"
    stats.appendChild(chat())
    return(stats)
}