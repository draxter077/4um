import main from "./main/main.js"
import funds from "./funds/main.js"
import bonds from "./bonds/main.js"
import stats from "./stats/main.js"
import tables from "./tables/main.js"

export default function content(d){
    let style = `
        {
            position:relative;
            width:100%;
            height:100%;
        }`

    const content = cE("div",style)
    content.id = "content"
    content.appendChild(main(d))
    content.appendChild(funds(d.funds))
    content.appendChild(bonds(d))
    content.appendChild(stats(d))
    content.appendChild(tables(d))
    return(content)
}