import fund from "./fund/main.js"

export default function content(fs){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:100%;
            height:100%;
            overflow:scroll;
        }`

    const content = cE("div", style)
    for(let i = 0; i < fs.length; i++){
        content.appendChild(fund(fs[i]));
    }
    return content;
}