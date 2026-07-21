import asset from "./asset/main.js"

export default function content(w){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:100%;
            height:100%;
            overflow:scroll;
            white-space:nowrap;
        }
        :responsive{
            overflow-x:scroll;
        }`

    const content = cE("div",style)
    for(let i = 0; i < w.length; i++){
        content.appendChild(asset(w[i]))
    }
    return(content)
}