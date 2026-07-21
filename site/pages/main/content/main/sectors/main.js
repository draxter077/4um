import sector from "./sector/main.js"

export default function sectors(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-around;
            align-items:center;
            flex-wrap:wrap;
            width:50%;
            height:100%;
            padding:10px;
        }
        :responsive{
            width:100%;
        }`

    const sectors = cE("div",style)
    sectors.appendChild(sector("./assets/icons/funds.png", "Informações FI", "funds"))
    sectors.appendChild(sector("./assets/icons/bonds.png", "Negociações TP", "bonds"))
    sectors.appendChild(sector("./assets/icons/stats.png", "Estatísticas", "stats"))
    return(sectors)
}