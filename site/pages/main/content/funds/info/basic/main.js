import stat from "./stat/main.js"

export default function basic(f){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            align-items:center;
            flex-wrap:wrap;
            width:100%;
        }
        :responsive{
            width:95%;
        }`

    const basic = cE("div",style)
    basic.appendChild(stat("CNPJ", f.cnpj ? f.cnpj : "-"))
    basic.appendChild(stat("Denominação", f.nome ? f.nome : "-"))
    basic.appendChild(stat("Situação", f.situacao ? f.situacao : "-"))
    basic.appendChild(stat("Data da situação", f.data_inicio_situacao ? f.data_inicio_situacao : "-"))
    basic.appendChild(stat("Classe", f.classe ? f.classe : "-"))
    basic.appendChild(stat("Classe ANBIMA", f.classe_anbima ? f.classe_anbima : "-"))
    basic.appendChild(stat("Código CVM", f.codigo_cvm ? f.codigo_cvm : "-"))
    basic.appendChild(stat("Referência de rentabilidade", f.rentabilidade ? f.rentabilidade : "-"))
    basic.appendChild(stat("Condomínio", f.condominio ? f.condominio : "-"))
    basic.appendChild(stat("Taxa de administração", f.taxa_administracao ? f.taxa_administracao : "-"))
    basic.appendChild(stat("Diretor", f.diretor ? f.diretor : "-"))
    basic.appendChild(stat("Gestor", f.gestor ? f.gestor : "-"))
    basic.appendChild(stat("Auditor", f.auditor ? f.auditor : "-"))
    basic.appendChild(stat("Controlador", f.controlador ? f.controlador : "-"))
    if(f.informe_diario && f.informe_diario.length > 0){
        basic.appendChild(stat("Patrimônio líquido", f.informe_diario[f.informe_diario.length-1].valor_patrimonio_liquido ? stringifyNumber(f.informe_diario[f.informe_diario.length-1].valor_patrimonio_liquido) : "-"))
        basic.appendChild(stat("Valor total", f.informe_diario[f.informe_diario.length-1].valor_total ? stringifyNumber(f.informe_diario[f.informe_diario.length-1].valor_total) : "-"))
        basic.appendChild(stat("Valor quota", f.informe_diario[f.informe_diario.length-1].valor_quota ? stringifyNumber(f.informe_diario[f.informe_diario.length-1].valor_quota) : "-"))
    }
    return(basic)
}