export default function input(){
    let style = `
        {
            font-size:14px;
            background:var(--colorDarkerBlue);
            color:var(--colorWhite);
            box-shadow:0px 0px 3px 0px var(--colorBlue);
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