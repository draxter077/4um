import question from "./question/main.js"

export default function questions(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:flex-start;
            justify-content:space-between;
            flex-wrap:wrap;
            width:100%;
            margin:2.5% 0px 0px 0px;
        }`

    const questions = cE("div",style)
    const SD = {
        "@context":"https://schema.org",
        "@type":"FAQPage",
        "mainEntity":[
            {
                "@type":"Question",
                "name":"",
                "acceptedAnswer":{
                    "@type":"Answer",
                    "text":""
                }
            }
        ]
        
    }
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(SD)
    document.head.appendChild(script)

    let qs = [
        {question:"Questão teste",answer:"Resposta teste"},
    ]

    for(let i = 0; i < qs.length; i++){
        questions.appendChild(question(qs[i]))
    }
    return(questions)
}