export default function title(){
    let style = `
        {
            font-size:24px;
            color:white;
        }
        :responsive{
            text-align:center;
        }`

    const title = cE("div",style)
    title.innerHTML = "Título Metodologia"
    return(title)
}