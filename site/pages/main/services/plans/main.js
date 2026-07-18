export default function plans(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:flex-start;
            width:100%;
            justify-content:space-around;
            margin:2.5% 0px 0px 0px;

            background:red;
            height:50svh;
        }
        :responsive{
            flex-direction:column;
            align-items:center;
        }`

    const plans = cE("div",style)
    plans.innerHTML = 'Ofertas'
    return(plans)
}