export default function curve(xi,yi,xf,yf,d){
    let style = `
        {
            position: absolute;
            left: ${xi};
            top: ${d ? yf : yi};
            width: calc(${xf} - ${xi});
            height: calc(${d ? `${yi} - ${yf}` : `${yf} - ${yi}`});
            background-image: ${d ? 
                "linear-gradient(to bottom right, transparent calc(50% - 1.5px), var(--colorGreen), transparent calc(50% + 1.5px))" : 
                "linear-gradient(to top right, transparent calc(50% - 1.5px), var(--colorGreen), transparent calc(50% + 1.5px))"};
        }`
    const curve = cE("div",style)
    return(curve)
}