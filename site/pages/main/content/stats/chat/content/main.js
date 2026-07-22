import history from "./history/main.js"

export default function content(){
    let style = `
        {
            display:flex;
            flex-direction:column-reverse;
            height:100%;
            width:100%;
            padding:5px;
            overflow:scroll;
        }`

    const content = cE("div",style)
    content.appendChild(history())
    return(content)
}