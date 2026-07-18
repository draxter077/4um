import logo from "./logo/main.js"
import forms from "./forms/main.js"
import foot from "./foot/main.js"

export default function login(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            width:100%;
            height:100svh;
        }`

    const login = cE("div",style)
    login.appendChild(logo())
    login.appendChild(forms())
    login.appendChild(foot())
    return(login)
}