import user from "../content/user/main.js"
import bot from "../content/bot/main.js"

export default function input(){
    let style = `
        {
            width:80%;
            font-size:14px;
            padding:10px 15px;
            margin:5px 0px 0px;
            border-radius:5px;
            color:var(--colorWhite);
            background:rgb(255,255,255,0.1);
            resize:none;
        }`

    const input = cE('textarea',style)
    input.placeholder = "Digite..."
    input.rows = 3

    input.addEventListener(
        "keypress",
        async function a(e){
            if(e.key == "Enter"){
                e.preventDefault()
                input.removeEventListener("keypress",a)

                const v = input.value
                document.getElementById("stats_history").appendChild(user(v))
                input.value = ""
                await new Promise(resolve => setTimeout(resolve, 500))

                let b = bot()
                document.getElementById("stats_history").appendChild(b)
                await axios.post(`${api_url}/stats`, {prompt:v})
                    .then(r => b.innerHTML = `<span>${r.data.answer}</span>`)
                    .catch(r => console.log(r))

                input.addEventListener("keypress",a)
            }
        }
    )
    return(input)
}