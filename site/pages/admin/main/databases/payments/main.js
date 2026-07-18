import head from "./head/main.js"
import content from "./content/main.js"

export default function payments(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:33%;
            height:100%;
            background:green;
            padding:10px 15px;
            box-shadow:0px 0px 3px 0px green;
            border-radius:10px;
        }
        :responsive{
            height:33%;
            width:100%;
        }`

    const payments = cE("div",style)
    payments.appendChild(head())
    payments.appendChild(content())
    return(payments)
}