export default function title(){
    let style = `
        {
            font-size:24px;
            color:white;
            font-weight:900;
            border-right:1px solid white;
            border-left:1px solid white;
            padding:5px 30px;
        }`

    const title = cE("div",style)
    title.innerHTML = "Perguntas frequentes"
    return(title)
}