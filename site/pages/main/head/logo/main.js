export default function logo(){
    let style = `
        {
            height:70px;
            background:var(--colorWhite);
            padding:10px 20px;
            border-radius:0px 0px 5px 5px;
        }
        :responsive{
            height:50px;
        }`

    const logo = cE("img",style)
    logo.src = "./assets/logo.png"
    logo.alt = "Logotipo da 4UM"
    return(logo)
}