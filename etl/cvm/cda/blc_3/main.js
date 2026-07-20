export default async function main(text, sql) {
    const lines = text.split("\n");
    const totalLines = lines.length;
    const BATCH_SIZE = 10000;
    let valuesBatch = [];
    for (let i = 1; i < totalLines; i++) {
        if (!lines[i].trim()) continue;
        const infos = lines[i].split(";");
        const row = [
            `'${infos[1]}'`,  // CNPJ_FUNDO_CLASSE
            `'${infos[3]}'`,  // DT_COMPTC
            `'${infos[4]}'`,  // TP_APLIC
            `'${infos[5]}'`,  // TP_ATIVO
            `'${infos[6]}'`,  // EMISSOR_LIGADO
            `'${infos[7]}'`,  // TP_NEGOC
            infos[8]  ? infos[8]  : 'NULL', // QT_VENDA_NEGOC
            infos[9]  ? infos[9]  : 'NULL', // VL_VENDA_NEGOC
            infos[10] ? infos[10] : 'NULL', // QT_AQUIS_NEGOC
            infos[11] ? infos[11] : 'NULL', // VL_AQUIS_NEGOC
            infos[12] ? infos[12] : 'NULL', // QT_POS_FINAL
            infos[13] ? infos[13] : 'NULL', // VL_MERC_POS_FINAL
            infos[14] ? infos[14] : 'NULL', // VL_CUSTO_POS_FINAL
            `'${infos[15]}'`, // DT_CONFID_APLIC
            `'${infos[16]}'`, // CD_SWAP
            `'${infos[17]}'`  // DS_SWAP
        ];
        valuesBatch.push(`(${row.join(',')})`);
        if (valuesBatch.length === BATCH_SIZE || i === totalLines - 1) {
            await sql(`INSERT INTO fi_carteira (
                cnpj, data_competencia, tipo_aplicacao, tipo_ativo, emissor_ligado, tipo_negociacao, 
                quantidade_venda_negociacao, valor_venda_negociacao, quantidade_aquisicao_negociacao, valor_aquisicao_negociacao,
                quantidade_posicao_final, valor_mercado_posicao_final, valor_custo_posicao_final, data_confidencialidade_aplicacao, 
                codigo_swap, descricao_swap
            )
            VALUES ${valuesBatch.join(',\n')}
            ON CONFLICT DO NOTHING;`);
            valuesBatch = [];
        }
    }
}