import text from "./text/main.js"

export default function answer(a){
    let style = `
        {
            width:100%;
            max-height:0px;
            overflow:hidden;
            transition:max-height 0.5s;
        }`

    const answer = cE("div",style)
    answer.appendChild(text(a))
    return(answer)
}