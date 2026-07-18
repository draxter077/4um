export default function img(){
    let style = `
        {
            height:28px;
            margin:0px 20px 0px 0px;
        }`

    const img = cE("img",style)
    img.src = "assets/whatsapp.png"
    img.alt = "Logotipo do WhatsApp"
    return(img)
}