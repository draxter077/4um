import copyright from "./copyright/main.js"

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
    brand.appendChild(copyright())
    return(brand)
}