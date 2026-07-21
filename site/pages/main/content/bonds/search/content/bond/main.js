import row from "./row/main.js"

import info from "../../../info/main.js"

export default function bond(b){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-around;
            flex-wrap:wrap;
            font-size:16px;
            color:var(--colorWhite);
            background:var(--colorBlack);
            padding:2px 5px;
            border-bottom:1px solid var(--colorWhite);
            width:100%;
            transition:background 0.5s;
            cursor:pointer;
        }
        :hover{
            background:var(--colorGreen);
        }`

    const bond = cE("div",style)
    bond.appendChild(row("160px",b.nome_titulo))
    bond.appendChild(row("275px",b.data_vencimento))

    bond.addEventListener("click", async () => {
        const bonds = document.getElementById("bonds");
        
        if(bonds.children[1]){
            bonds.children[1].style.opacity = 0;
            await new Promise(resolve => setTimeout(resolve, 501));
            bonds.removeChild(bonds.children[1])
            await new Promise(resolve => setTimeout(resolve, 10));
        }

        let data = {}
        await axios.post(`${api_url}/bonds/get`, {nome_titulo:b.nome_titulo, data_vencimento:b.data_vencimento})
            .then(async r => {
                data = r.data
            })
            .catch(async r => {})

        document.getElementById("bonds").appendChild(info(data))
        await new Promise(resolve => setTimeout(resolve, 10));
        document.getElementById("bonds").children[1].style.opacity = 1;
    })
    return(bond)
}