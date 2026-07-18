import img from "./img/main.js"
import text from "./text/main.js"

export default function title(im, t){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
        }`

    const title = cE("div",style)
    title.appendChild(img(im))
    title.appendChild(text(t))
    return(title)
}