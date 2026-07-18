import link from "./link/main.js"

export default function links(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:flex-end;
            width:50%;
        }
        :responsive{
            justify-content:center;
            width:100%;
            margin:10px 0px 0px 0px;
        }`

    const links = cE("div",style)
    links.appendChild(link("Sobre", "who"))
    links.appendChild(link("Soluções", "services"))
    links.appendChild(link("FAQ", "faq"))
    return(links)
}