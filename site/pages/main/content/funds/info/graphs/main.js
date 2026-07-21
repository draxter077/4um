import mono from "./mono/main.js"

export default function monos(fid){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            flex-wrap:wrap;
            width:100%;
            height:fit-content;
        }`

    const monos = cE("div",style)
    monos.appendChild(mono("Patrimônio líquido",fid))
    monos.appendChild(mono("Valor total",fid))
    monos.appendChild(mono("Valor quota",fid))
    monos.appendChild(mono("Captação dia",fid))
    return(monos)
}