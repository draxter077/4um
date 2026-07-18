import head from "./head/main.js"
import status from "./status/main.js"
import sqlQuery from "./sqlQuery/main.js"
import databases from "./databases/main.js"
import foot from "./foot/main.js"

export default function main(d){
    let style = `
        {
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            align-items:center;
            width:100%;
            height:100svh;
        }
        :responsive{
            height:fit-content;
        }`

    const main = cE("div",style)
    main.appendChild(head())
    main.appendChild(status())
    main.appendChild(sqlQuery())
    main.appendChild(databases())
    main.appendChild(foot())
    return(main)
}