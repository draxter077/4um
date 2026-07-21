export default function curve(xi,yi,xf,yf,d,t){
    let style = `
        {
            position: absolute;
            left: ${xi};
            top: ${d ? yf : yi};
            width: calc(${xf} - ${xi});
            height: calc(${d ? `${yi} - ${yf}` : `${yf} - ${yi}`} + 2px);
            background-image: ${d ? 
                `linear-gradient(to bottom right, transparent calc(50% - 1.5px), ${t ? "var(--colorGreen)" : "rgb(250,50,50)"}, transparent calc(50% + 1.5px))` : 
                `linear-gradient(to top right, transparent calc(50% - 1.5px), ${t ? "var(--colorGreen)" : "rgb(250,50,50)"}, transparent calc(50% + 1.5px))`};
        }`
    const curve = cE("div",style)
    return(curve)
}