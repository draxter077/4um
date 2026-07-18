export default function img(src){
    let style = `
        {
            height:100%;
            filter:invert(1);
        }`

    const img = cE("img",style)
    img.src = src
    img.alt = "Logotipo de rede social"
    return(img)
}