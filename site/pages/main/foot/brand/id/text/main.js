export default function text(){
    let style = `
        {
            font-size:16px;
            margin:0px 0px 0px 20px;
            color:var(--colorWhite);
            font-weight:900;
        }`

    const text = cE("div",style)
    text.innerHTML = `NomeEmpresa`
    return(text)
}