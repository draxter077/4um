export default function logo(){
    let style = `
        {
            height:45px;
            border:2px solid var(--colorWhite);
        }`

    const logo = cE("img",style)
    logo.src = "/assets/logo.jpg"
    logo.alt = "Logotipo da Ph Web Software"
    return(logo)
}