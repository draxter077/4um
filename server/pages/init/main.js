import sql from "../../sql/main.js"

export default async function init(req, res){
    let fis = await sql(`SELECT * FROM fi_cadastro ORDER BY nome;`);
    fis = fis.rows

    console.log(fis[0]) // Teste

    let funds = []
    for(let i = 0; i < fis.length; i++){
        const fi = fis[i];

        let informe_diario = await sql(`SELECT * FROM fi_informe WHERE cnpj='${fi.cnpj}' ORDER BY data_competencia DESC LIMIT 6`);
        let carteira_sql = await sql(`SELECT * FROM fi_carteira WHERE cnpj='${fi.cnpj}' 
                                            AND data_competencia=(SELECT MAX(data_competencia) FROM fi_carteira WHERE cnpj='${fi.cnpj})') 
                                            ORDER BY data_competencia DESC`)

        carteira_sql = carteira_sql.rows;
        console.log(carteira_sql[0]) // Teste
        let carteira = []
        for(let j = 0; j < carteira_sql.length; j++){
            const c = carteira_sql[j];
            if(j == 0){
                carteira.push(
                    {
                        tipo:c.tipo_aplicacao,
                        valor:c.valor_mercado_posicao_final,
                        porcentagem:c.valor_patrimonio_liquido
                    }
                )
            }
            else{
                for(let k = 0; k < carteira.length; k++){
                    const cTest = carteira[k];
                    if(cTest.tipo == c.tipo_aplicacao){
                        carteira[k].valor += c.valor_mercado_posicao_final;
                        break;
                    }
                    else if(k == carteira.length - 1){
                        carteira.push(
                            {
                                tipo:c.tipo_aplicacao,
                                valor:c.valor_mercado_posicao_final,
                                porcentagem:c.valor_patrimonio_liquido
                            }
                        )
                    }
                }
            }
        }

        for(let k = 0; k < carteira.length; k++){
            const c = carteira[k];
            carteira[k].porcentagem = Math.round( (c.valor/c.porcentagem)*1000 )/10 + "%";
        }
        

        funds.push(
            {
                cnpj:fi.cnpj,
                nome:fi.nome,
                situacao:fi.situacao,
                data_situacao:fi.data_situacao,
                classe:fi.classe,
                classe_anbima:fi.classe_anbima,
                codigo_cvm:fi.codigo_cvm,
                rentabilidade:fi.rentabilidade,
                condominio:fi.condominio,
                taxa_administracao:fi.taxa_administracao,
                diretor:fi.diretor,
                gestor:fi.gestor,
                auditor:fi.auditor,
                controlador:fi.controlador,
                informe_diario:informe_diario.rows,
                carteira:carteira
            }
        )
    }

    const data = {
        funds:funds
    }

    console.log(`>> 4um/init`)
    res.status(200).send(data).end()
}