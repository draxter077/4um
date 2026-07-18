import link from "./link/main.js"

export default function links(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
        }`

    const links = cE("div",style)
    links.appendChild(link("/assets/whatsapp.png",whatsapp_url))
    links.appendChild(link("/assets/instagram.png",instagram_url))
    return(links)
}