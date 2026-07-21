export default function icon(src){
    let style = `
        {
            height:80px;
            filter:invert(1);
            margin:0px 0px 20px 0px;
        }
        :responsive{
            height:50px;
        }`

    const icon = cE("img",style)
    icon.src = src
    return(icon)
}