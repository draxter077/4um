export default function input(){
    let style = `
        {
            font-size:14px;
            background:white;
            color:black;
            box-shadow:0px 0px 3px 0px white;
            padding:10px 15px;
            border-radius:5px;
            width:60%;
        }
        ::placeholder{
            font-style:italic;
        }`

    const input = cE("input",style)
    input.placeholder = "Comando SQL"
    return(input)
}