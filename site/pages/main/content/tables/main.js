export default function tables(d){
    let style = `
        {
            position:absolute;
            top:0%;
            left:0%;
            display:none;
            flex-direction:column;
            justify-content:space-between;
            align-items:center;
            width:100%;
            height:100%;
            background:green;
            opacity:0;
            transition:all 0.5s;
        }`

    const tables = cE("div",style)
    tables.id = "tables"
    tables.innerHTML = 'tables'
    return(tables)
}