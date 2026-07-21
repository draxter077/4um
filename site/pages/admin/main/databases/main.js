import payments from "./payments/main.js"
import orders from "./orders/main.js"
import clients from "./clients/main.js"

export default function databases(d){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-around;
            width:90%;
            height:50%;
        }
        :responsive{
            flex-direction:column;
            height:100svh;
            width:95%;
            margin:5% 0px 0px 0px;
        }`

    const databases = cE("div",style)
    databases.appendChild(payments())
    databases.appendChild(orders())
    databases.appendChild(clients())
    return(databases)
}