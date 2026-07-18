export default function text(){
    let style = `
        {
            font-size:20px;
            color:var(--colorBlack);
        }`

    const text = cE("div",style)
    text.innerHTML = "Fale com a NomeEmpresa"
    return(text)
}