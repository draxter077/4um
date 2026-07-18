export default function text(){
    let style = `
        {
            font-size:16px;
            color:var(--colorWhite);
            font-weight:900;
            font-family:"Garet",system-ui;
            margin:0px 10px 0px 0px;
        }`

    const text = cE("div",style)
    text.innerHTML = "Desenvolvido por"
    return(text)
}