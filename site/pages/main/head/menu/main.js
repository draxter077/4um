export default function menu(){
    let style = `
        {
            height:35px;
            margin:0px calc(30% - 35px) 0px 0px;
            filter:invert(1);
            cursor:pointer;
            transition:all 0.25s;
        }
        :hover{
            transform:scale(1.1);
        }
        :responsive{
            height:25px;
        }`

    const menu = cE("img",style)
    menu.src = "./assets/icons/menu.png"
    menu.alt = "Ícone de menu"

    menu.addEventListener(
        "click",
        async function a(){
            let cs = document.getElementById("content").children
            for(let i = 0; i < cs.length; i++){
                if(cs[i].style.display == "flex" && cs[i].id != "main"){
                    document.getElementById("main").style.display = "flex"
                    cs[i].style.opacity = "0"
                    await new Promise(r => setTimeout(r,550))
                    cs[i].style.display = "none"
                    document.getElementById("main").style.opacity = "1"
                    break
                }
            }
        }
    )
    return(menu)
}