import search from "./search/main.js"

export default function head(l){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-between;
            width:100%;
        }`

    const head = cE("div",style)
    head.appendChild(search(l))
    return(head)
}