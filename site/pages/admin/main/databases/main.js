import payments from "./payments/main.js"

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
    return(databases)
}