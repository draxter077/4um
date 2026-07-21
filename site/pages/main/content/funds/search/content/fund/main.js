import row from "./row/main.js"

import info from "../../../info/main.js"

export default function fund(f){
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

    const fund = cE("div",style)
    fund.appendChild(row("160px",f.cnpj))
    fund.appendChild(row("275px",f.nome))

    fund.addEventListener("click", async () => {
        const funds = document.getElementById("funds");
        const ops = document.getElementById("search").children[1].children;
        for(let i = 0; i < ops.length; i++){
            ops[i].style.background = "var(--colorBlack)";
            if(ops[i].innerHTML.includes(f.cnpj)){
                ops[i].style.background = "var(--colorGreen)"
            }
        }
        
        if(funds.children[1]){
            funds.children[1].style.opacity = 0;
            await new Promise(resolve => setTimeout(resolve, 501));
            funds.removeChild(funds.children[1])
            await new Promise(resolve => setTimeout(resolve, 10));
        }
        document.getElementById("funds").appendChild(info(f))
        await new Promise(resolve => setTimeout(resolve, 10));
        document.getElementById("funds").children[1].style.opacity = 1;
    })
    return(fund)
}