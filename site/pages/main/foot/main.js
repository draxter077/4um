import brand from "./brand/main.js"

export default function foot(){
    let style = `
        {
            width:100%;
            height:fit-content;
            padding:1%;
        }`

    const foot = cE("div",style)
    foot.appendChild(brand())
    return(foot)
}