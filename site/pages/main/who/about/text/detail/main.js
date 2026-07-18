export default function detail(){
    let style = `
        {
            font-size:16px;
            margin:10px 0px 0px 0px;
            text-align:justify;
            color:white;
        }`

    const detail = cE("div",style)
    detail.innerHTML = `Descrição geral da empresa`
    return(detail)
}