import input from './input/main.js'
import button from "./button/main.js"

export default function sqlQuery(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-around;
            width:80%;
        }
        :responsive{
            margin:20px 0px 0px 0px;
        }`

    const sqlQuery = cE("div",style)
    sqlQuery.appendChild(input())
    sqlQuery.appendChild(button())
    return(sqlQuery)
}