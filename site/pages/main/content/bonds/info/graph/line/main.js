export default function line(y){
    let style = `
        {
            position:absolute;
            top:${y};
            right:2.5%;
            width:90%;
            height:1px;
            background:var(--colorWhite);
            opacity:0.5;
        }`

    const line = cE("div", style)
    return(line)
}