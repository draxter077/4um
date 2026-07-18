import query from "./query/main.js"
import answer from "./answer/main.js"

export default function question(q){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:49%;
            box-shadow:0px 0px 3px 0px white;
            padding:10px 15px;
            border-radius:15px;
            margin:5px 0px;
            cursor:pointer;
        }
        :responsive{
            width:100%;
        }`

    const question = cE("div",style)
    question.appendChild(query(q.question))
    question.appendChild(answer(q.answer))

    question.addEventListener(
        "click",
        function a(){
            let as = question.children[1]
            let ar = question.children[0].children[1]

            as.style = "max-height:1000px;"
            ar.style = "transform:rotate(180deg);"

            question.removeEventListener("click",a)
            question.addEventListener(
                "click",
                function b(){
                    as.style = "max-height:0px;"
                    ar.style = "transform:rotate(0deg);"

                    question.removeEventListener("click",b)
                    question.addEventListener("click",a)
                }
            )
        }
    )
    return(question)
}