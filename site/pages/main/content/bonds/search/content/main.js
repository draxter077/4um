export default function content(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:100%;
            height:100%;
            overflow:scroll;
        }`

    const content = cE("div", style)
    content.id = "bonds_content"
    return content;
}