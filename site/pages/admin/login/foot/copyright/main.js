export default function copyright(){
    let style = `
        {
            font-size:12px;
            font-weight:900;
            text-align:center;
            color:var(--colorWhite);
            margin:20px 0px 0px 0px;
        }`

    const copyright = cE("div",style)
    copyright.innerHTML = `62.797.808/0001-41 © ${new Date().getFullYear()} | Todos os direitos reservados`
    return(copyright)
}