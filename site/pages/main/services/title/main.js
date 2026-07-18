export default function title(){
    let style = `
        {
            font-size:24px;
            color:white;
            text-align:right;
            width:100%;
        }
        :responsive{
            text-align:center;
        }`

    const title = cE("div",style)
    title.innerHTML = "Título para Serviços"
    return(title)
}