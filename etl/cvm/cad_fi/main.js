export default async function main(sql){
    await sql(`CREATE TABLE IF NOT EXISTS fi_cadastro (
        cnpj VARCHAR PRIMARY KEY,tipo VARCHAR,nome VARCHAR,data_registro VARCHAR,data_constituicao VARCHAR,
        codigo_cvm VARCHAR,data_cancelamento VARCHAR,situacao VARCHAR,data_inicio_situacao VARCHAR,data_inicio_atividade VARCHAR,
        data_inicio_exercicio VARCHAR,data_fim_exercicio VARCHAR,classe VARCHAR,data_inicio_classe VARCHAR,rentabilidade VARCHAR,condominio VARCHAR,
        fundo_cotas VARCHAR,fundo_exclusivo VARCHAR,tributacao_lprazo VARCHAR,publico_alvo VARCHAR,entidade_investimento VARCHAR,
        taxa_performance FLOAT,informacoes_taxa_performance VARCHAR,taxa_administracao FLOAT,informacoes_taxa_administracao VARCHAR,
        patrimonio_liquido FLOAT,data_patrimonio_liquido VARCHAR,diretor VARCHAR,cnpj_admin VARCHAR,admin VARCHAR,
        pf_pj_gestor VARCHAR,cpf_cnpj_gestor VARCHAR,gestor VARCHAR,cnpj_auditor VARCHAR,auditor VARCHAR,cnpj_custodiante VARCHAR,
        custodiante VARCHAR,cnpj_controlador VARCHAR,controlador VARCHAR,investimento_cinq_exterior VARCHAR,classe_anbima VARCHAR
    )`);
    const response = await fetch(`https://dados.cvm.gov.br/dados/FI/CAD/DADOS/cad_fi.csv`);        
    const bufferPuro = await response.arrayBuffer();
    const buffer = Buffer.from(bufferPuro); //Conversão para o formato Buffer que o NodeJS e o adm-zip entendem
    const text = buffer.toString("latin1");
    const lines = text.replaceAll('"','').replaceAll("'","").split("\n");
    const totalLines = lines.length;
    const BATCH_SIZE = 10000;
    let valuesBatch = [];

    for(let i = 1; i < totalLines; i++){
        process.stdout.write(`>> Atualizando informações cadastrais | ${Math.round((i/totalLines)*10000)/100}%    \r`);
        if(!lines[i].trim()) continue;
        try{
            const infos = lines[i].split(";");
            const row = [
                `'${infos[1]}'`, // CNPJ_FUNDO
                `'${infos[0]}'`, // TP_FUNDO
                `'${infos[2]}'`, // DENOM_SOCIAL
                `'${infos[3]}'`, // DT_REG
                `'${infos[4]}'`, // DT_CONST
                `'${infos[5]}'`, // CD_CVM
                `'${infos[6]}'`, // DT_CANCEL
                `'${infos[7]}'`, // SIT
                `'${infos[8]}'`, // DT_INI_SIT
                `'${infos[9]}'`, // DT_INI_ATIV
                `'${infos[10]}'`, // DT_INI_EXERC
                `'${infos[11]}'`, // DT_FIM_EXERC
                `'${infos[12]}'`, // CLASSE
                `'${infos[13]}'`, // DT_INI_CLASSE
                `'${infos[14]}'`, // RENTAB_FUNDO
                `'${infos[15]}'`, // CONDOM
                `'${infos[16]}'`, // FUNDO_COTAS
                `'${infos[17]}'`, // FUNDO_EXCLUSIVO
                `'${infos[18]}'`, // TRIB_LPRAZO
                `'${infos[19]}'`, // PUBLICO_ALVO
                `'${infos[20]}'`, // ENTID_INVEST
                infos[21] ? infos[21] : 'NULL', // TAXA_PERFM
                `'${infos[22]}'`, // INF_TAXA_PERFM
                infos[23] ? infos[23] : 'NULL', // TAXA_ADM
                `'${infos[24]}'`, // INF_TAXA_ADM
                infos[25] ? infos[25] : 'NULL', // VL_PATRIM_LIQ
                `'${infos[26]}'`, // DT_PATRIM_LIQ
                `'${infos[27]}'`, // DIRETOR
                `'${infos[28]}'`, // CNPJ_ADMIN
                `'${infos[29]}'`, // ADMIN
                `'${infos[30]}'`, // PF_PJ_GESTOR
                `'${infos[31]}'`, // CPF_CNPJ_GESTOR
                `'${infos[32]}'`, // GESTOR
                `'${infos[33]}'`, // CNPJ_AUDITOR
                `'${infos[34]}'`, // AUDITOR
                `'${infos[35]}'`, // CNPJ_CUSTODIANTE
                `'${infos[36]}'`, // CUSTODIANTE
                `'${infos[37]}'`, // CNPJ_CONTROLADOR
                `'${infos[38]}'`, // CONTROLADOR
                `'${infos[39]}'`, // INVEST_CEMPR_EXTER
                `'${infos[40]}'`  // CLASSE_ANBIMA
            ];
            valuesBatch.push(`(${row.join(',')})`);
            if(valuesBatch.length === BATCH_SIZE || i === totalLines - 1){
                await sql(`INSERT INTO fi_cadastro (cnpj, tipo, nome, data_registro, 
                    data_constituicao, codigo_cvm, data_cancelamento, situacao, data_inicio_situacao, 
                    data_inicio_atividade, data_inicio_exercicio, data_fim_exercicio, classe, data_inicio_classe, 
                    rentabilidade, condominio, fundo_cotas, fundo_exclusivo, tributacao_lprazo, publico_alvo, 
                    entidade_investimento, taxa_performance, informacoes_taxa_performance, taxa_administracao, 
                    informacoes_taxa_administracao, patrimonio_liquido, data_patrimonio_liquido, diretor, cnpj_admin, 
                    admin, pf_pj_gestor, cpf_cnpj_gestor, gestor, cnpj_auditor, auditor, cnpj_custodiante, custodiante, 
                    cnpj_controlador, controlador, investimento_cinq_exterior, classe_anbima)

                    VALUES ${valuesBatch.join(',\n')}
                    
                    ON CONFLICT (cnpj) DO NOTHING;`);
                valuesBatch = [];
            }
        }
        catch (error){
            console.log(`ERRO: ${error.message}`);
        }
    }
    console.log(">> Informações cadastrais atualizadas          ");
}