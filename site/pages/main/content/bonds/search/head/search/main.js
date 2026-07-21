import bond from "../../content/bond/main.js"

export default function search(){
    let style = `
        {
            width:100%;
            font-size:16px;
            padding:2px 5px;
            border-bottom:1px solid var(--colorGreen);
            color:var(--colorWhite);
        }
        ::placeholder{
            font-style:italic;
        }`

    const search = cE("input",style)
    search.placeholder = `Pesquise em títulos públicos`

    search.addEventListener(
        "keypress",
        async function a(e){
            const v = search.value
            if(e.key == "Enter"){
                document.getElementById("bonds_content").innerHTML = ""
                await axios.post(`${api_url}/bonds/search`, {text:v})
                    .then(r => {
                        search.placeholder = `Pesquise em títulos públicos [${r.data.total}]`
                        const bs = r.data.bonds;
                        for(let i = 0; i < bs.length; i++){
                            document.getElementById("bonds_content").appendChild(bond(bs[i]))
                        }
                    })
                    .catch(r => {console.log(r)})
            }
        }
    )
    return(search)
}