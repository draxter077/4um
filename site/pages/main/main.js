import head from "./head/main.js"
import content from "./content/main.js"
import foot from "./foot/main.js"

export default async function main(){
    let style = `
        {
            position:relative;
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            align-items:center;
            width:100%;
            height:100svh;
        }`

    const main = cE("div",style)

    let data = {}
    await axios.get(`${api_url}/init`)
        .then(r => {
            data = r.data;
        })
        .catch(r => {alert("ERRO");console.log(r)})
        
    main.appendChild(head())
    main.appendChild(content(data))
    main.appendChild(foot())
    return(main)
}