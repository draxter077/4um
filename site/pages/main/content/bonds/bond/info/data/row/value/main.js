export default function value(v){
    let style = `
        {
            font-size:16px;
            color:var(--colorWhite);
            margin:5px 0px 0px;
        }`

    const value = cE("div",style)
    value.innerHTML = v
    return(value)
}