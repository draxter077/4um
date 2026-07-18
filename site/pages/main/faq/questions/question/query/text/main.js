export default function text(t){
    let style = `
        {
            font-size:18px;
            color:var(--colorWhite);
            font-weight:900;
            width:80%;
        }`

    const text = cE("div",style)
    text.innerHTML = t
    return(text)
}