export default function info_bot(){
    let style = `
        {
            font-size:16px;
            color:var(--colorWhite);
            width:30%;
            text-align:right;
        }
        :responsive{
            font-size:12px;
        }`

    const info_bot = cE("div",style)
    info_bot.innerHTML = `Atualizado em<br>00/00 às 00h00`            
    return(info_bot)
}