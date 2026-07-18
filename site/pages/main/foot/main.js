import brand from "./brand/main.js"
import sitemap from "./sitemap/main.js"
import copyright from "./copyright/main.js"

export default function foot(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
            height:fit-content;
            background:green;
            margin:5% 0px 0px 0px;
            padding:2% 5% 1%;
        }
        :responsive{
            margin:10% 0px 0px 0px;
        }`

    const foot = cE("div",style)
    foot.appendChild(brand())
    foot.appendChild(sitemap())
    foot.appendChild(copyright())
    return(foot)
}