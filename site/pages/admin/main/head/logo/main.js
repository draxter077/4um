export default function logo(){
    let style = `
        {
            height:75px;
            border:2px solid var(--colorWhite);
            box-shadow:0px 0px 3px 0px var(--colorWhite);
        }
        :responsive{
            margin:2.5% 0px;
        }`

    const logo = cE("img",style)
    logo.src = "/assets/"
    logo.alt = "Logotipo da NomeEmpresa"
    return(logo)
}