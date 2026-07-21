import head from "./head/main.js"
import content from "./content/main.js"
import foot from "./foot/main.js"

export default function main(){
    let style = `
        {
            position:relative;
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            align-items:center;
            width:100%;
            height:100svh;
        }`

    const main = cE("div",style)
    main.appendChild(head())
    main.appendChild(content(
        {
            funds:[
                {
                    cnpj:"00.000.000/0001-00",
                    nome:"FUNDO DE INVESTIMENTO PIPIPI POPOPO LTDA",
                    situacao:"ABERTO",
                    data_situacao:"00/00/0000",
                    classe:"Multimercado",
                    classe_anbima:"0123456",
                    codigo_cvm:"1234567",
                    rentabilidade:"Referência",
                    condominio:"ABERTO",
                    taxa_administracao:"0.5",
                    diretor:"Diretor do Fundo",
                    gestor:"Gestor do Fundo",
                    auditor:"Auditor do Fundo",
                    controlador:"Controlador do Fundo",
                    informe_diario:[
                        {data_competencia:"2026-06-01",valor_total:176000,valor_quota:100.50,valor_patrimonio_liquido:15005000,captacao_dia:1500},
                        {data_competencia:"2026-06-02",valor_total:176100,valor_quota:100.45,valor_patrimonio_liquido:16000000,captacao_dia:0},
                        {data_competencia:"2026-06-03",valor_total:176300,valor_quota:100.30,valor_patrimonio_liquido:18004000,captacao_dia:15000},
                        {data_competencia:"2026-06-04",valor_total:175700,valor_quota:100.13,valor_patrimonio_liquido:15400000,captacao_dia:100},
                        {data_competencia:"2026-06-05",valor_total:177000,valor_quota:100.60,valor_patrimonio_liquido:19000000,captacao_dia:500},
                        {data_competencia:"2026-06-06",valor_total:176400,valor_quota:100.47,valor_patrimonio_liquido:21000000,captacao_dia:150}
                    ],
                    carteira:[
                        {tipo:"Cotas de Fundos", valor:"R$ 12.000.000,00", porcentagem:"95%"},
                        {tipo:"Valores a Receber", valor:"R$ 12.000,00", porcentagem:"5%"}
                    ]
                },
                {
                    cnpj:"00.000.000/0001-01",
                    nome:"FUNDO DE INVESTIMENTO PIPIPI POPOPO LTDA",
                    situacao:"ABERTO",
                    data_situacao:"00/00/0000",
                    classe:"Multimercado",
                    classe_anbima:"0123456",
                    codigo_cvm:"1234567",
                    rentabilidade:"Referência",
                    condominio:"ABERTO",
                    taxa_administracao:"0.5",
                    diretor:"Diretor do Fundo",
                    gestor:"Gestor do Fundo",
                    auditor:"Auditor do Fundo",
                    controlador:"Controlador do Fundo",
                    informe_diario:[
                        {data_competencia:"2026-06-01",valor_total:176000,valor_quota:100.50,valor_patrimonio_liquido:15005000,captacao_dia:1500},
                        {data_competencia:"2026-06-02",valor_total:176100,valor_quota:100.45,valor_patrimonio_liquido:16000000,captacao_dia:0},
                        {data_competencia:"2026-06-03",valor_total:176300,valor_quota:100.30,valor_patrimonio_liquido:18004000,captacao_dia:15000},
                        {data_competencia:"2026-06-04",valor_total:175700,valor_quota:100.13,valor_patrimonio_liquido:15400000,captacao_dia:100},
                        {data_competencia:"2026-06-05",valor_total:177000,valor_quota:100.60,valor_patrimonio_liquido:19000000,captacao_dia:500},
                        {data_competencia:"2026-06-06",valor_total:176400,valor_quota:100.47,valor_patrimonio_liquido:21000000,captacao_dia:150}
                    ],
                    carteira:[
                        {tipo:"Cotas de Fundos", valor:"R$ 12.000.000,00", porcentagem:"95%"},
                        {tipo:"Valores a Receber", valor:"R$ 12.000,00", porcentagem:"5%"}
                    ]
                },
                {
                    cnpj:"00.000.000/0001-02",
                    nome:"FUNDO DE INVESTIMENTO PIPIPI POPOPO LTDA",
                    situacao:"ABERTO",
                    data_situacao:"00/00/0000",
                    classe:"Multimercado",
                    classe_anbima:"0123456",
                    codigo_cvm:"1234567",
                    rentabilidade:"Referência",
                    condominio:"ABERTO",
                    taxa_administracao:"0.5",
                    diretor:"Diretor do Fundo",
                    gestor:"Gestor do Fundo",
                    auditor:"Auditor do Fundo",
                    controlador:"Controlador do Fundo",
                    informe_diario:[
                        {data_competencia:"2026-06-01",valor_total:176000,valor_quota:100.50,valor_patrimonio_liquido:15005000,captacao_dia:1500},
                        {data_competencia:"2026-06-02",valor_total:176100,valor_quota:100.45,valor_patrimonio_liquido:16000000,captacao_dia:0},
                        {data_competencia:"2026-06-03",valor_total:176300,valor_quota:100.30,valor_patrimonio_liquido:18004000,captacao_dia:15000},
                        {data_competencia:"2026-06-04",valor_total:175700,valor_quota:100.13,valor_patrimonio_liquido:15400000,captacao_dia:100},
                        {data_competencia:"2026-06-05",valor_total:177000,valor_quota:100.60,valor_patrimonio_liquido:19000000,captacao_dia:500},
                        {data_competencia:"2026-06-06",valor_total:176400,valor_quota:100.47,valor_patrimonio_liquido:21000000,captacao_dia:150}
                    ],
                    carteira:[
                        {tipo:"Cotas de Fundos", valor:"R$ 12.000.000,00", porcentagem:"95%"},
                        {tipo:"Valores a Receber", valor:"R$ 12.000,00", porcentagem:"5%"}
                    ]
                },
                {
                    cnpj:"00.000.000/0001-03",
                    nome:"FUNDO DE INVESTIMENTO PIPIPI POPOPO LTDA",
                    situacao:"ABERTO",
                    data_situacao:"00/00/0000",
                    classe:"Multimercado",
                    classe_anbima:"0123456",
                    codigo_cvm:"1234567",
                    rentabilidade:"Referência",
                    condominio:"ABERTO",
                    taxa_administracao:"0.5",
                    diretor:"Diretor do Fundo",
                    gestor:"Gestor do Fundo",
                    auditor:"Auditor do Fundo",
                    controlador:"Controlador do Fundo",
                    informe_diario:[
                        {data_competencia:"2026-06-01",valor_total:176000,valor_quota:100.50,valor_patrimonio_liquido:15005000,captacao_dia:1500},
                        {data_competencia:"2026-06-02",valor_total:176100,valor_quota:100.45,valor_patrimonio_liquido:16000000,captacao_dia:0},
                        {data_competencia:"2026-06-03",valor_total:176300,valor_quota:100.30,valor_patrimonio_liquido:18004000,captacao_dia:15000},
                        {data_competencia:"2026-06-04",valor_total:175700,valor_quota:100.13,valor_patrimonio_liquido:15400000,captacao_dia:100},
                        {data_competencia:"2026-06-05",valor_total:177000,valor_quota:100.60,valor_patrimonio_liquido:19000000,captacao_dia:500},
                        {data_competencia:"2026-06-06",valor_total:176400,valor_quota:100.47,valor_patrimonio_liquido:21000000,captacao_dia:150}
                    ],
                    carteira:[
                        {tipo:"Cotas de Fundos", valor:"R$ 12.000.000,00", porcentagem:"95%"},
                        {tipo:"Valores a Receber", valor:"R$ 12.000,00", porcentagem:"5%"}
                    ]
                },
                {
                    cnpj:"00.000.000/0001-04",
                    nome:"FUNDO DE INVESTIMENTO PIPIPI POPOPO LTDA",
                    situacao:"ABERTO",
                    data_situacao:"00/00/0000",
                    classe:"Multimercado",
                    classe_anbima:"0123456",
                    codigo_cvm:"1234567",
                    rentabilidade:"Referência",
                    condominio:"ABERTO",
                    taxa_administracao:"0.5",
                    diretor:"Diretor do Fundo",
                    gestor:"Gestor do Fundo",
                    auditor:"Auditor do Fundo",
                    controlador:"Controlador do Fundo",
                    informe_diario:[
                        {data_competencia:"2026-06-01",valor_total:176000,valor_quota:100.50,valor_patrimonio_liquido:15005000,captacao_dia:1500},
                        {data_competencia:"2026-06-02",valor_total:176100,valor_quota:100.45,valor_patrimonio_liquido:16000000,captacao_dia:0},
                        {data_competencia:"2026-06-03",valor_total:176300,valor_quota:100.30,valor_patrimonio_liquido:18004000,captacao_dia:15000},
                        {data_competencia:"2026-06-04",valor_total:175700,valor_quota:100.13,valor_patrimonio_liquido:15400000,captacao_dia:100},
                        {data_competencia:"2026-06-05",valor_total:177000,valor_quota:100.60,valor_patrimonio_liquido:19000000,captacao_dia:500},
                        {data_competencia:"2026-06-06",valor_total:176400,valor_quota:100.47,valor_patrimonio_liquido:21000000,captacao_dia:150}
                    ],
                    carteira:[
                        {tipo:"Cotas de Fundos", valor:"R$ 12.000.000,00", porcentagem:"95%"},
                        {tipo:"Valores a Receber", valor:"R$ 12.000,00", porcentagem:"5%"}
                    ]
                },
                {
                    cnpj:"00.000.000/0001-05",
                    nome:"FUNDO DE INVESTIMENTO PIPIPI POPOPO LTDA",
                    situacao:"ABERTO",
                    data_situacao:"00/00/0000",
                    classe:"Multimercado",
                    classe_anbima:"0123456",
                    codigo_cvm:"1234567",
                    rentabilidade:"Referência",
                    condominio:"ABERTO",
                    taxa_administracao:"0.5",
                    diretor:"Diretor do Fundo",
                    gestor:"Gestor do Fundo",
                    auditor:"Auditor do Fundo",
                    controlador:"Controlador do Fundo",
                    informe_diario:[
                        {data_competencia:"2026-06-01",valor_total:176000,valor_quota:100.50,valor_patrimonio_liquido:15005000,captacao_dia:1500},
                        {data_competencia:"2026-06-02",valor_total:176100,valor_quota:100.45,valor_patrimonio_liquido:16000000,captacao_dia:0},
                        {data_competencia:"2026-06-03",valor_total:176300,valor_quota:100.30,valor_patrimonio_liquido:18004000,captacao_dia:15000},
                        {data_competencia:"2026-06-04",valor_total:175700,valor_quota:100.13,valor_patrimonio_liquido:15400000,captacao_dia:100},
                        {data_competencia:"2026-06-05",valor_total:177000,valor_quota:100.60,valor_patrimonio_liquido:19000000,captacao_dia:500},
                        {data_competencia:"2026-06-06",valor_total:176400,valor_quota:100.47,valor_patrimonio_liquido:21000000,captacao_dia:150}
                    ],
                    carteira:[
                        {tipo:"Cotas de Fundos", valor:"R$ 12.000.000,00", porcentagem:"95%"},
                        {tipo:"Valores a Receber", valor:"R$ 12.000,00", porcentagem:"5%"}
                    ]
                }
            ]
        }
    ))
    main.appendChild(foot())
    //main.appendChild(menu())
    return(main)
}