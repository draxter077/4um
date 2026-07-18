export default function copyright(){
    let style = `
        {
            font-size:13px;
            font-weight:900;
            text-align:center;
            color:var(--colorWhite);
        }
        :responsive{
            order:2;
            margin:20px 0px 0px 0px;
        }`

    const copyright = cE("div",style)
    copyright.innerHTML = `00.000.000/0001-00 © ${new Date().getFullYear()} | Todos os direitos reservados`
    return(copyright)
}