export default function title(){
    let style = `
        {
            font-size:26px;
            color:white;
        }
        :responsive{
            text-align:center;
        }`

    const title = cE("div",style)
    title.innerHTML = `Algum Título`
    return(title)
}