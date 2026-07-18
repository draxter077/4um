import text from "./text/main.js"
import logo from "./logo/main.js"

export default function about(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-around;
            width:90%;
        }
        :responsive{
            flex-direction:column;
            width:95%;
        }`

    const about = cE("div",style)
    about.appendChild(text())
    about.appendChild(logo())
    return(about)
}