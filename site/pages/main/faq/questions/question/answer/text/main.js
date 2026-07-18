export default function text(t){
    let style = `
        {
            font-size:16px;
            text-align:justify;
            color:var(--colorWhite);
            width:100%;
            padding:2%;
        }`

    const text = cE("div",style)
    text.innerHTML = t
    return(text)
}