export default function title(t){
    let style = `
        {
            font-size:12px;
            color:var(--colorWhite);
        }`

    const title = cE("div",style)
    title.innerHTML = t
    return(title)
}