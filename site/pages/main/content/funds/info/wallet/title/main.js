export default function title(){
    let style = `
        {
            font-size:16px;
            color:var(--colorWhite);
            margin:5px 0px;
        }`

    const title = cE("div",style)
    title.innerHTML = "Composição"
    return(title)
}