export default function bot(){
    let style = `
        {
            color:var(--colorBlack);
            width:100%;
            text-align:left;
            padding:15px 30% 15px 10px;

            max-height:0px;
            animation:taller 5s linear 1 forwards;
            overflow:hidden;

            user-select:text;
        }
        >span{
            padding:5px 10px;
            border-radius:5px;
            background:var(--colorGreen);
            overflow:hidden;
        }
        >span>div{
            width:50px;
            height:10px;
            border-radius:10px;
            background:var(--colorWhite);
            animation:loading2 2s linear 0s infinite alternate;
        }
        :responsive{
            padding:15px 10% 15px 10px;
        }`

    const bot = cE("div",style)
    bot.innerHTML = `<span><div></div></span>`
    return(bot)
}