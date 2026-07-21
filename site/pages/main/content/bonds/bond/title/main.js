export default function title(t){
    let style = `
        {
            font-size:21px;
            color:var(--colorWhite);
            margin:5px 0px;
        }`

    const title = cE("div",style)
    title.innerHTML = t
    return(title)
}