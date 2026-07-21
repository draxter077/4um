export default function logo(){
    let style = `
        {
            height:100px;
            border:3px solid var(--colorWhite);
            box-shadow:0px 0px 3px 0px var(--colorWhite);
        }
        :responsive{
            width:20%;
            height:fit-content;
        }`
        
    const logo = cE("img",style)
    logo.src = "/assets/logo.jpg"
    logo.alt = "Logotipo da Ph Web Software"
    return(logo)
}