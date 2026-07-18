import id from "./id/main.js"
import copyright from "./copyright/main.js"
import links from "./links/main.js"

export default function brand(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-around;
            width:100%;
        }
        :responsive{
            flex-wrap:wrap;
        }`

    const brand = cE("div",style)
    brand.appendChild(id())
    brand.appendChild(copyright())
    brand.appendChild(links())
    return(brand)
}