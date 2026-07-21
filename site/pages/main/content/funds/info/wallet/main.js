import title from "./title/main.js"
import content from "./content/main.js"

export default function wallet(w){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:calc(100% - 10px);
            height:fit-content;
            margin:5px;
            padding:10px 15px;
            box-shadow:0px 0px 2px 0px var(--colorWhite);
            border-radius:5px;
        }
        :responsive{
            height:80svh;
            width:95%;
        }`

    const wallet = cE("div",style)
    wallet.appendChild(title())
    wallet.appendChild(content(w))
    return(wallet)
}