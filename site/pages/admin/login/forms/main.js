import inputs from "./inputs/main.js"
import buttons from "./buttons/main.js"

export default function forms(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:25%;
            margin:2.5% 0px 0px 0px;
        }
        :responsive{
            margin:10% 0px 0px 0px;
            width:95%;
        }`

    const forms = cE("div",style)
    forms.appendChild(inputs())
    forms.appendChild(buttons())
    return(forms)
}