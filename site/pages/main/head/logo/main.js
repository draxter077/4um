export default function logo(){
    let style = `
        {
            height:50px;
            border:2px solid var(--colorWhite);
        }
        :responsive{
            height:75px;
            margin:2.5% 0px;
        }`

    const logo = cE("img",style)
    logo.src = "/assets/"
    logo.alt = "Logotipo da NomeEmpresa"
    return(logo)
}