export default function icon(){
    let style = `
        {
            height:18px;
            transition:all 0.5s;
            filter:invert(1);
        }`

    const icon = cE("img",style)
    icon.src = "/assets/icons/arrow.png"
    icon.alt = "Flecha para abertura da resposta"
    return(icon)
}