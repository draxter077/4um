export default function detail(d){
    let style = `
        {
            font-size:12px;
            color:var(--colorWhite);
        }`

    const detail = cE("div",style)
    detail.innerHTML = d
    return(detail)
}