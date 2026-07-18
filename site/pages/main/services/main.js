import title from "./title/main.js"
import plans from "./plans/main.js"
import button from "./button/main.js"

export default function services(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:90%;
            margin:5% 0px 0px 0px;
            opacity:0;
            transform:translateY(50%);
            transition:all 0.5s;
        }
        :responsive{
            width:95%;
            margin:20% 0px 0px 0px;
        }`

    const services = cE("div",style)
    services.id = "services"
    services.appendChild(title())
    services.appendChild(plans())
    services.appendChild(button())

    window.addEventListener(
        "scroll",
        async function a(){
            let e = document.getElementById(services.id)
            if(window.scrollY > e.offsetTop - window.innerHeight*0.7){
                window.removeEventListener("scroll",a)
                e.style.opacity = 1
                e.style.transform = "translateY(0%)"
            }
        }
    )
    return(services)
}