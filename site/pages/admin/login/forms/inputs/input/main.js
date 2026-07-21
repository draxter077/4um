export default function input(p){
    let style = `
        {
            width:100%;
            font-size:14px;
            padding:10px 15px;
            background:var(--colorDarkerBlue);
            color:var(--colorWhite);
            box-shadow:0px 0px 3px 0px var(--colorBlue);
            border-radius:10px;
            margin:5px 0px;
            transition:all 0.5s;
        }
        ::placeholder{
            font-style:italic;
        }`

    const input = cE("input",style)
    input.placeholder = p

    return(input)
}