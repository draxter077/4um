import main from "./main/main.js"
import funds from "./funds/main.js"
import bonds from "./bonds/main.js"
import stats from "./stats/main.js"

export default function content(){
    let style = `
        {
            position:relative;
            width:100%;
            height:100%;
        }`

    const content = cE("div",style)
    content.id = "content"
    content.appendChild(main())
    content.appendChild(funds())
    content.appendChild(bonds())
    content.appendChild(stats())
    return(content)
}