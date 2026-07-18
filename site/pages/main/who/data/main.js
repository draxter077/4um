export default function data(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:flex-start;
            justify-content:space-around;
            width:100%;
            background:red;
            box-shadow:0px 0px 2px 0px red;
            padding:2.5% 0px;
            margin:3% 0px 0px 0px;
        }
        :responsive{
            margin:5% 0px 0px 0px;
            flex-wrap:wrap;
        }`

    const data = cE("div",style)
    data.innerHTML = "DATA [carrossel, números...]"
    return(data)
}