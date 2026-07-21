import row from "./row/main.js"

export default function asset(f){
    let style = `
        {
            position:relative;

            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-around;
            flex-wrap:wrap;
            font-size:16px;
            color:var(--colorWhite);
            background:linear-gradient(to right, rgb(140,198,63,0.5) ${f.porcentagem}, var(--colorBlack) ${f.porcentagem});
            padding:2px 5px;
            border-bottom:1px solid var(--colorWhite);
            width:100%;
        }`

    const asset = cE("div",style)
    asset.appendChild(row("200px",f.tipo))
    asset.appendChild(row("300px",f.valor))
    asset.appendChild(row("100px",f.porcentagem))
    return(asset)
}