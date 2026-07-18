export default function logo(){
    let style = `
        {
            width:10%;
            box-shadow:0px 0px 3px 0px var(--colorWhite);
            border:5px solid var(--colorWhite);
        }
        :responsive{
            display:none;
        }`

    const logo = cE("img",style)
    logo.src = "/assets/"
    logo.alt = "Logotipo da NomeEmpresa"
    return(logo)
}