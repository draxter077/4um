import head from "./head/main.js"
import outdoor from "./outdoor/main.js"
import who from "./who/main.js"
import services from "./services/main.js"
import method from "./method/main.js"
import faq from "./faq/main.js"
import foot from "./foot/main.js"
import ph from "./ph/main.js"

export default function main(){
    const SD = { // Padrão em todo main de página
        "@context":"https://schema.org",
        "@type":"Organization",
        "name":"",
        "alternateName":"",
        "url":"",
        "logo":"",
        "taxID":"",
        "image":"",
        "email":"",
        "telephone":"",
        "slogan":"",
        "description":"",
        "areaServed":"BR",
        "address":{
            "@type":"PostalAddress",
            "streetAddress":"",
            "addressLocality":"",
            "addressRegion":"",
            "addressCountry":"BR",
            "postalCode":""
        },
        "sameAs":[
            "",
            instagram_url,
            whatsapp_url
        ]
    }
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(SD)
    document.head.appendChild(script)

    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
            height:fit-content;
        }`

    const main = cE("div",style)
    main.appendChild(head())
    main.appendChild(outdoor())
    main.appendChild(who())
    main.appendChild(services())
    main.appendChild(method())
    main.appendChild(faq())
    main.appendChild(foot())
    main.appendChild(ph())
    return(main)
}