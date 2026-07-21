import search from "./search/main.js"
import info from "./info/main.js"

export default function funds(){
    let style = `
        {
            position:absolute;
            top:0%;
            left:0%;
            display:none;
            flex-direction:row;
            justify-content:space-between;
            align-items:center;
            width:100%;
            height:100%;
            padding:1%;
            opacity:0;
            transition:all 0.5s;
        }
        :responsive{
            flex-direction:column;
            overflow:scroll;
        }`

    const funds = cE("div",style)
    funds.id = "funds"
    funds.appendChild(search())
    return(funds)
}