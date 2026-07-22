import bot from "../bot/main.js"

export default function history(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:100%;
            height:fit-content;
            font-size:14px;
        }`

    const history = cE("div",style)
    history.id = "stats_history"

    let b = bot()
    b.innerHTML = `
        <span>
            Olá, estou aqui para te ajudar a encontrar informações em minha base de dados.<br>
            Como estou em fase de treinamento, não consigo reler mensagens, por isso, me envie o máximo de informação e referenciação possível.
        </span>`
    history.appendChild(b)

    return(history)
}