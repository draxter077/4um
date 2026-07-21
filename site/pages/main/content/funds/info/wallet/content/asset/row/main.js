export default function row(w,t){
    let style = `
        {
            width:${w};
            text-align:center;
            overflow:hidden;
        }`

    const row = cE("div",style)
    row.innerHTML = t
    return(row)
}