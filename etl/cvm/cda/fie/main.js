export default async function main(text,sql){
    const lines = text.split("\n");
    const totalLines = lines.length;
    const BATCH_SIZE = 10000;
    let valuesBatch = [];
    for(let i = 1; i < totalLines; i++){
        if(!lines[i].trim()) continue;
        const infos = lines[i].split(";");
        const row = [
            `'${infos[1]}'`, // CNPJ_FUNDO_CLASSE
            `'${infos[3]}'`, // DT_COMPTC
            `'${infos[4]}'`, // ID_DOC
            infos[5] ? infos[5] : 'NULL', // VL_PATRIM_LIQ
            `'${infos[6]}'`, // TP_APLIC
            `'${infos[7]}'`, // TP_ATIVO
            `'${infos[8]}'`, // EMISSOR_LIGADO
            `'${infos[9]}'`, // TP_NEGOC
            infos[10] ? infos[10] : 'NULL', // QT_VENDA_NEGOC
            infos[11] ? infos[11] : 'NULL', // VL_VENDA_NEGOC
            infos[12] ? infos[12] : 'NULL', // QT_AQUIS_NEGOC
            infos[13] ? infos[13] : 'NULL', // VL_AQUIS_NEGOC
            infos[14] ? infos[14] : 'NULL', // QT_POS_FINAL
            infos[15] ? infos[15] : 'NULL', // VL_MERC_POS_FINAL
            infos[16] ? infos[16] : 'NULL', // VL_CUSTO_POS_FINAL
            `'${infos[17]}'`, // DT_CONFID_APLIC
            `'${infos[18]}'`, // CD_ATIVO
            `'${infos[19]}'`, // DS_ATIVO
            `'${infos[20]}'`, // DT_VENC
            `'${infos[21]}'`, // PF_PJ_EMISSOR
            `'${infos[22]}'`, // CPF_CNPJ_EMISSOR
            `'${infos[23]}'`, // EMISSOR
            `'${infos[24]}'`, // RISCO_EMISSOR
            `'${infos[25]}'`, // CD_SELIC
            `'${infos[26]}'`, // DT_INI_VIGENCIA
            `'${infos[27]}'`, // CD_PAIS
            `'${infos[28]}'`, // PAIS
            `'${infos[29]}'`, // CD_BV_MERC
            `'${infos[30]}'`  // BV_MERC
        ];
        valuesBatch.push(`(${row.join(',')})`);
        if(valuesBatch.length === BATCH_SIZE || i === totalLines - 1){
            await sql(`INSERT INTO fi_carteira (
            cnpj, data_competencia, identificador_documento, valor_patrimonio_liquido, tipo_aplicacao, tipo_ativo, emissor_ligado, tipo_negociacao, 
            quantidade_venda_negociacao, valor_venda_negociacao, quantidade_aquisicao_negociacao, valor_aquisicao_negociacao, 
            quantidade_posicao_final, valor_mercado_posicao_final, valor_custo_posicao_final, data_confidencialidade_aplicacao,
            codigo_ativo, descricao_ativo, data_vencimento, pf_pj_emissor, 
            cpf_cnpj_emissor, emissor, risco_emissor, codigo_selic, 
            data_inicio_vigencia, codigo_pais, pais, codigo_bolsa_valores_mercado, bolsa_valores_mercado
            )
            
            VALUES ${valuesBatch.join(',\n')}

            ON CONFLICT DO NOTHING;`);
            valuesBatch = [];
        }
    }
}