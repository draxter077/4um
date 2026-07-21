import search from "./search/main.js"
import info from "./info/main.js"

export default function bonds(){
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

    const bonds = cE("div",style)
    bonds.id = "bonds"
    bonds.appendChild(search())
    return(bonds)
}