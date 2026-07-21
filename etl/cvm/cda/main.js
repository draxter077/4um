import blc_1 from "./blc_1/main.js"
import blc_2 from "./blc_2/main.js"
import blc_3 from "./blc_3/main.js"
import blc_4 from "./blc_4/main.js"
import blc_5 from "./blc_5/main.js"
import blc_6 from "./blc_6/main.js"
import blc_7 from "./blc_7/main.js"
import blc_8 from "./blc_8/main.js"
import fi_confid from "./fi_confid/main.js"
import fie from "./fie/main.js"
import fie_confid from "./fie_confid/main.js"

export default async function main(AdmZip,sql){
    await sql(`CREATE TABLE IF NOT EXISTS fi_carteira (
        cnpj VARCHAR,data_competencia VARCHAR,tipo_aplicacao VARCHAR,
        tipo_ativo VARCHAR,emissor_ligado VARCHAR,tipo_negociacao VARCHAR,quantidade_venda_negociacao FLOAT,
        valor_venda_negociacao FLOAT,quantidade_aquisicao_negociacao FLOAT,valor_aquisicao_negociacao FLOAT,
        quantidade_posicao_final FLOAT,valor_mercado_posicao_final FLOAT,valor_custo_posicao_final FLOAT,valor_patrimonio_liquido FLOAT,
        data_confidencialidade_aplicacao VARCHAR,tipo_titulo_publico VARCHAR,codigo_isin VARCHAR,
        codigo_selic VARCHAR,data_emissao VARCHAR,data_vencimento VARCHAR,cnpj_fundo_classe_cota VARCHAR,
        identificador_subclasse VARCHAR,nome_fundo_classe_subclasse_cota VARCHAR,codigo_swap VARCHAR,
        descricao_swap VARCHAR,codigo_ativo VARCHAR,descricao_ativo VARCHAR,data_inicio_vigencia VARCHAR,
        data_fim_vigencia VARCHAR,cnpj_emissor VARCHAR,emissor VARCHAR,titulo_pos_fixado VARCHAR,codigo_indexador_pos_fixado VARCHAR,
        descricao_indexador_pos_fixado VARCHAR,percentual_indexador_pos_fixado FLOAT,percentual_cupom_pos_fixado FLOAT,percentual_taxa_pre_fixada FLOAT,
        risco_emissor VARCHAR,agencia_risco VARCHAR,data_risco VARCHAR,grau_risco VARCHAR,pf_pj_emissor VARCHAR,
        cpf_cnpj_emissor VARCHAR,titulo_cetip VARCHAR,titulo_garantia VARCHAR,cnpj_instituicao_financeira_coobrigacao VARCHAR,
        investimento_coletivo VARCHAR,investimento_coletivo_gestor VARCHAR,codigo_pais VARCHAR,pais VARCHAR,
        codigo_bolsa_valores_mercado VARCHAR,bolsa_valores_mercado VARCHAR,codigo_ativo_bolsa_valores_mercado VARCHAR,
        descricao_ativo_exterior VARCHAR,quantidade_ativo_exterior VARCHAR,valor_ativo_exterior VARCHAR,identificador_documento VARCHAR
    );`)

    await sql(`CREATE UNIQUE INDEX IF NOT EXISTS fi_carteira_index
        ON fi_carteira (cnpj, data_competencia, identificador_documento, tipo_aplicacao, tipo_ativo, emissor_ligado, tipo_negociacao,
            data_confidencialidade_aplicacao, tipo_titulo_publico, codigo_isin, codigo_selic, data_emissao, data_vencimento,
            cnpj_fundo_classe_cota, identificador_subclasse, nome_fundo_classe_subclasse_cota, codigo_swap, descricao_swap,
            codigo_ativo, descricao_ativo, data_inicio_vigencia, data_fim_vigencia, cnpj_emissor, titulo_pos_fixado, codigo_indexador_pos_fixado,
            descricao_indexador_pos_fixado, cpf_cnpj_emissor, titulo_cetip, codigo_pais, codigo_bolsa_valores_mercado, codigo_ativo_bolsa_valores_mercado, descricao_ativo_exterior)
        NULLS NOT DISTINCT
    ;`)

    await sql(`CREATE INDEX IF NOT EXISTS idx_fi_carteira_cnpj_data ON fi_carteira (cnpj, data_competencia DESC);`)

    const monthness = 6;
    const d = new Date();
    const nowYear = d.getFullYear();
    let nowMonth = d.getMonth() + 1;

    // Loop para varrer os últimos 6 meses, a partir do mês anterior
    for(let i = 0; i < monthness; i++){
        let refYear = nowYear;
        let refMonth = nowMonth - monthness + i;
        if(refMonth <= 0){
            refMonth += 12;
            refYear -= 1;
        }
        if(refYear >= 2023){ // A base começa em 202301
            if(refMonth < 10){refMonth = "0" + refMonth;}
            try{
                const response = await fetch(`https://dados.cvm.gov.br/dados/FI/DOC/CDA/DADOS/cda_fi_${refYear}${refMonth}.zip`);        
                const bufferPuro = await response.arrayBuffer();
                const buffer = Buffer.from(bufferPuro); //Conversão para o formato Buffer que o NodeJS e o adm-zip entendem
                const zip = new AdmZip(buffer);
                const archives = zip.getEntries(); // Lista todos os arquivos internos
                for(let j = 0; j < archives.length; j++){ // nem sempre terão todos os arquivos
                    const name = archives[j].entryName;
                    const text = archives[j].getData().toString('latin1').replaceAll('"','').replaceAll("'","").replaceAll("\r","");
                    process.stdout.write(`>> Atualizando CDA ${name}      \r`)
                    if(name.includes("BLC_1_")){await blc_1(text,sql);}
                    else if(name.includes("BLC_2_")){await blc_2(text,sql);}
                    else if(name.includes("BLC_3_")){await blc_3(text,sql);}
                    else if(name.includes("BLC_4_")){await blc_4(text,sql);}
                    else if(name.includes("BLC_5_")){await blc_5(text,sql);}
                    else if(name.includes("BLC_6_")){await blc_6(text,sql);}
                    else if(name.includes("BLC_7_")){await blc_7(text,sql);}
                    else if(name.includes("BLC_8_")){await blc_8(text,sql);}
                    else if(name.includes("fi_CONFID")){await fi_confid(text,sql);}
                    else if(name.includes("fie_2")){await fie(text,sql);}
                    else if(name.includes("fie_CONFID")){await fie_confid(text,sql);}
                }
            }
            catch (error){
                console.log(`ERRO ${refYear}${refMonth} ${error.message}`);
            }
        }
        else{console.log(`  ERRO: data anterior ao começo da base [202301]`);}
    }
    console.log(">> CDA atualizado          ");
}