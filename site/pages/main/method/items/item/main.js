import title from "./title/main.js"
import description from "./description/main.js"

export default function item(i){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:flex-start;
            border-top:1px solid white;
            padding:10px 15px;
            width:75%;
        }
        :responsive{
            width:100%;
        }`

    const item = cE("div",style)
    item.appendChild(title(i.img,i.title))
    item.appendChild(description(i.description))
    return(item)
}