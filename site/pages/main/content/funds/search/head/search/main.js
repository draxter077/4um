export default function search(l){
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
    search.placeholder = `Pesquise em fundos [${l}]`

    search.addEventListener(
        "input",
        function a(e){
            const v = search.value
            const cs = e.target.parentElement.parentElement.children[1].children
            for(let i = 0; i < cs.length; i++){
                if(!cs[i].innerHTML.includes(v)){
                    cs[i].style.display = "none"
                }
                else{
                    cs[i].style.display = "flex"
                }

            }
        }
    )
    return(search)
}