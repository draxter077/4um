import fund from "./fund/main.js"

export default function content(fs){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:100%;
            height:100%;
            overflow:scroll;
        }`

    const content = cE("div", style)

    const batchSize = 20; 
    let currentIndex = 0;
    const total = fs.length;

    function renderBatch() {
        const fragment = document.createDocumentFragment();
        const end = Math.min(currentIndex + batchSize, total);

        for (let i = currentIndex; i < end; i++) {
            if (fs[i]) {
                fragment.appendChild(fund(fs[i]));
            }
        }

        content.appendChild(fragment);
        currentIndex = end;

        if (currentIndex < total) {
            setTimeout(renderBatch, 0); 
        }
    }

    renderBatch();
    return content;
}