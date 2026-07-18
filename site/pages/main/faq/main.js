import title from "./title/main.js"
import questions from "./questions/main.js"

export default function faq(){
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

    const faq = cE("div",style)
    faq.id = "faq"
    faq.appendChild(title())
    faq.appendChild(questions())

    window.addEventListener(
        "scroll",
        async function a(){
            let e = document.getElementById(faq.id)
            if(window.scrollY > e.offsetTop - window.innerHeight*0.7){
                window.removeEventListener("scroll",a)
                e.style.opacity = 1
                e.style.transform = "translateY(0%)"
            }
        }
    )
    return(faq)
}