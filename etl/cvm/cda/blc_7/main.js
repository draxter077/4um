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
            `'${infos[4]}'`, // TP_APLIC
            `'${infos[5]}'`, // TP_ATIVO
            `'${infos[6]}'`, // EMISSOR_LIGADO
            `'${infos[7]}'`, // TP_NEGOC
            infos[8] ? infos[8] : 'NULL', // QT_VENDA_NEGOC
            infos[9] ? infos[9] : 'NULL', // VL_VENDA_NEGOC
            infos[10] ? infos[10] : 'NULL', // QT_AQUIS_NEGOC
            infos[11] ? infos[11] : 'NULL', // VL_AQUIS_NEGOC
            infos[12] ? infos[12] : 'NULL', // QT_POS_FINAL
            infos[13] ? infos[13] : 'NULL', // VL_MERC_POS_FINAL
            infos[14] ? infos[14] : 'NULL', // VL_CUSTO_POS_FINAL
            `'${infos[15]}'`, // DT_CONFID_APLIC
            `'${infos[16]}'`, // INVEST_COLETIVO
            `'${infos[17]}'`, // INVEST_COLETIVO_GESTOR
            `'${infos[18]}'`, // EMISSOR
            `'${infos[19]}'`, // DT_VENC
            `'${infos[20]}'`, // CD_PAIS
            `'${infos[21]}'`, // PAIS
            `'${infos[22]}'`, // CD_BV_MERC
            `'${infos[23]}'`, // BV_MERC
            `'${infos[24]}'`, // CD_ATIVO_BV_MERC
            `'${infos[25]}'`, // RISCO_EMISSOR
            `'${infos[26]}'`, // AG_RISCO
            `'${infos[27]}'`, // DT_RISCO
            `'${infos[28]}'`, // GRAU_RISCO
            `'${infos[29]}'`, // DS_ATIVO_EXTERIOR
            infos[30] ? infos[30] : 'NULL', // QT_ATIVO_EXTERIOR
            infos[31] ? infos[31] : 'NULL'  // VL_ATIVO_EXTERIOR
        ];
        valuesBatch.push(`(${row.join(',')})`);
        if(valuesBatch.length === BATCH_SIZE || i === totalLines - 1){
            await sql(`INSERT INTO fi_carteira (
            cnpj, data_competencia, tipo_aplicacao, tipo_ativo, emissor_ligado, tipo_negociacao, 
            quantidade_venda_negociacao, valor_venda_negociacao, quantidade_aquisicao_negociacao, valor_aquisicao_negociacao, 
            quantidade_posicao_final, valor_mercado_posicao_final, valor_custo_posicao_final, data_confidencialidade_aplicacao,
            investimento_coletivo, investimento_coletivo_gestor, emissor, data_vencimento, 
            codigo_pais, pais, codigo_bolsa_valores_mercado, bolsa_valores_mercado, codigo_ativo_bolsa_valores_mercado, 
            risco_emissor, agencia_risco, data_risco, grau_risco, descricao_ativo_exterior, quantidade_ativo_exterior, valor_ativo_exterior
            )
            VALUES ${valuesBatch.join(',\n')}
            ON CONFLICT DO NOTHING;`);
            valuesBatch = [];
        }
    }
}