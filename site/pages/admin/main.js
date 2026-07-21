import main from "./main/main.js"
import login from "./login/main.js"

export default function admin(data){
    let style = `
        {
            width:100%;
        }`

    const admin = cE("div", style)
    document.title = "Admin Ph"
    if(data){
        admin.appendChild(main(data))
    }
    else{
        admin.appendChild(login())
    }

    return(admin)
}