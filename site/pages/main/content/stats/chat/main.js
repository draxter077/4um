import content from "./content/main.js"
import input from "./input/main.js"

export default function chat(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            width:70%;
            height:80%;
        }
        :responsive{
            width:95%;
            height:95%;
        }`

    const chat = cE("div",style)
    chat.appendChild(content())
    chat.appendChild(input())
    return(chat)
}