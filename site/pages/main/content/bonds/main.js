export default function stats(d){
    let style = `
        {
            position:absolute;
            top:0%;
            left:0%;
            display:none;
            flex-direction:column;
            justify-content:space-between;
            align-items:center;
            width:100%;
            height:100%;
            background:yellow;
            opacity:0;
            transition:all 0.5s;
        }`

    const stats = cE("div",style)
    stats.id = "bonds"
    stats.innerHTML = 'Bonds'
    return(stats)
}