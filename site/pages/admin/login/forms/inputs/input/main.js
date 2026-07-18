export default function input(p){
    let style = `
        {
            width:100%;
            font-size:14px;
            padding:10px 15px;
            background:white;
            color:black;
            box-shadow:0px 0px 3px 0px white;
            border-radius:10px;
            margin:5px 0px;
            transition:all 0.5s;
        }
        ::placeholder{
            font-style:italic;
        }`

    const input = cE("input",style)
    input.placeholder = p
    if(p=="Senha"){input.type = "password"}
    return(input)
}