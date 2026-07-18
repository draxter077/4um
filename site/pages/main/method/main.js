import title from "./title/main.js"
import items from "./items/main.js"

export default function method(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:90%;
            margin:5% 0px 0px 0px;
            border-radius:5px;
            padding:20px 25px;
            background:red;
            box-shadow:0px 0px 3px 0px red;
            opacity:0;
            transform:translateY(50%);
            transition:all 0.5s;
        }
        :responsive{
            width:95%;
            margin:20% 0px 0px 0px;
        }`

    const method = cE("div",style)
    method.id = "method"
    method.appendChild(title())
    method.appendChild(items([
        {img:"",title:"Diferencial",description:"Descrição"},
        {img:"",title:"Diferencial",description:"Descrição"},
        {img:"",title:"Diferencial",description:"Descrição"},
        {img:"",title:"Diferencial",description:"Descrição"},
        {img:"",title:"Diferencial",description:"Descrição"}
    ]))

    window.addEventListener(
        "scroll",
        async function a(){
            let e = document.getElementById(method.id)
            if(window.scrollY > e.offsetTop - window.innerHeight*0.7){
                window.removeEventListener("scroll",a)
                e.style.opacity = 1
                e.style.transform = "translateY(0%)"
            }
        }
    )
    return(method)
}