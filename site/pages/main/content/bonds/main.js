import bond from "./bond/main.js";

export default function bonds(bs) {
    let style = `
        {
            position:absolute;
            top:0%;
            left:0%;
            display:none;
            flex-direction:row;
            flex-wrap:wrap;
            width:100%;
            height:100%;
            overflow:scroll;
            opacity:0;
            transition:all 0.5s;
        }`;

    const bonds = cE("div", style);
    bonds.id = "bonds";
    for (let i = 0; i < bs.length; i++){
        bonds.appendChild(bond(bs[i]));
    }
    return bonds;
}