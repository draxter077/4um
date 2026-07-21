export default function value(d){
    let style = `
        {
            font-size:18px;
            color:var(--colorWhite);
        }`

    const value = cE("div",style)
    value.innerHTML = d
    return(value)
}