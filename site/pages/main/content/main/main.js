import sectors from "./sectors/main.js"

export default function main(){
    let style = `
        {
            position:absolute;
            top:0%;
            left:0%;
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            align-items:center;
            width:100%;
            height:100%;
            padding:1% 0px;
            opacity:1;
            transition:all 0.5s;
        }`

    const main = cE("div",style)
    main.id = "main"
    main.appendChild(sectors())
    return(main)
}