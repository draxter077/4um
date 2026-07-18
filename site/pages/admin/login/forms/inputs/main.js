import input from "./input/main.js"

export default function inputs(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:100%;
        }`

    const inputs = cE("div",style)
    inputs.id = "formsInputs"
    inputs.appendChild(input("Admin"))
    inputs.appendChild(input("Senha"))
    return(inputs)
}