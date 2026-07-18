import title from "./title/main.js"
import detail from "./detail/main.js"

export default function text(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:flex-start;
            width:75%;
        }
        :responsive{
            width:100%;
        }`

    const text = cE("div",style)
    text.appendChild(title())
    text.appendChild(detail())
    return(text)
}