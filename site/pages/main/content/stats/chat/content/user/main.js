export default function user(t){
    let style = `
        {
            color:var(--colorBlack);
            width:100%;
            text-align:right;
            padding:15px 10px 15px 30%;

            max-height:0px;
            animation:taller 5s linear 1 forwards;
            overflow:hidden;

            user-select:text;
        }
        >span{
            padding:5px 10px;
            border-radius:5px;
            background:rgb(255,255,255,0.75);
        }
        :responsive{
            padding:15px 10px 15px 10%;
        }`

    const user = cE("div",style)
    user.innerHTML = `<span>${t}</span>`
    return(user)
}