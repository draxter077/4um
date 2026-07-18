import copyright from "./copyright/main.js"

export default function foot(){
    let style = `
        {
            width:100%;
            height:fit-content;
            padding:1%;
        }
        :responsive{
            padding:2.5%;
        }`

    const foot = cE("div",style)
    foot.appendChild(copyright())
    return(foot)
}