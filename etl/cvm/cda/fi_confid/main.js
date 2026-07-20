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
            infos[5] ? infos[5] : 'NULL', // VL_VENDA_NEGOC
            infos[6] ? infos[6] : 'NULL', // VL_AQUIS_NEGOC
            infos[7] ? infos[7] : 'NULL', // VL_MERC_POS_FINAL
            infos[8] ? infos[8] : 'NULL', // VL_CUSTO_POS_FINAL
            `'${infos[9]}'`  // DT_CONFID_APLIC
        ];
        valuesBatch.push(`(${row.join(',')})`);
        if(valuesBatch.length === BATCH_SIZE || i === totalLines - 1){
            await sql(`INSERT INTO fi_carteira (
            cnpj,data_competencia,tipo_aplicacao,valor_venda_negociacao,valor_aquisicao_negociacao,
            valor_mercado_posicao_final,valor_custo_posicao_final,data_confidencialidade_aplicacao
            )
            
            VALUES ${valuesBatch.join(',\n')}

            ON CONFLICT DO NOTHING;`);
            valuesBatch = [];
        }
    }
}