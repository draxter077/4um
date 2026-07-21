export default function label(x, y, t){
    let style = `
        {
            position:absolute;
            font-size:10px;
            top:${y};
            left:${x};
            color:var(--colorWhite);
            opacity:0.5;
        }
        :responsive{font-size:7px;}`

    const label = cE("div", style)
    label.innerHTML = t
    return(label)
}