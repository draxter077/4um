import head from "./head/main.js"
import content from "./content/main.js"

export default function search(ps){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:29%;
            height:100%;
            padding:10px 15px;
            box-shadow:0px 0px 2px 0px var(--colorWhite);
            border-radius:10px;
        }
        :responsive{
            height:20svh;
            width:100%;
        }`

    const search = cE("div",style)
    search.id = "search"
    search.appendChild(head(ps.length))
    search.appendChild(content(ps))
    return(search)
}