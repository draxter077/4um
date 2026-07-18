import text from "./text/main.js"
import logo from "./logo/main.js"
import { randomName } from "../../../main.js"

export default function ph(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:center;
            width:100%;
            padding:10px 15px;
            background:linear-gradient(90deg,var(--colorBluePh) 40%,var(--colorBlack) 50%);
            background-size:300%;
            background-position:100%;
            transition:all 1s;
            cursor:pointer;
        }
        :responsive{
            background:var(--colorBluePh);
        }`

    const ph = cE("a",style)
    ph.href = "https://www.ph.net.br"
    ph.id = randomName([])
    ph.appendChild(text())
    ph.appendChild(logo())

    window.addEventListener(
        "scroll",
        function a(){
            const p = document.getElementById(ph.id)
            if(window.scrollY + window.innerHeight >= p.offsetTop){
                p.style = "background-position:0%;"
                window.removeEventListener("scroll", a)
            }
        }
    )

    ph.addEventListener(
        "mouseover",
        function a(){
            ph.children[1].style.transform = "scale(1.1)"
            ph.removeEventListener("mouseover", a)
            ph.addEventListener(
                "mouseout",
                function b(){
                    ph.children[1].style.transform = "scale(1)"
                    ph.removeEventListener("mouseout", b)
                    ph.addEventListener("mouseover", a)
                }
            )
        }
    )
    return(ph)
}