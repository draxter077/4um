export default async function main(text, sql) {
    const lines = text.split("\n");
    const totalLines = lines.length;
    const BATCH_SIZE = 10000;
    let valuesBatch = [];
    let cnpjBatchSet = new Set();

    for (let i = 1; i < totalLines; i++) {
        if (!lines[i].trim()) continue;
        const infos = lines[i].split(";");
        const cnpj = infos[1] ? infos[1].trim() : null;
        if (!cnpj) continue;

        const nome = infos[2] ? infos[2].trim().replace(/'/g, "''") : cnpj;
        cnpjBatchSet.add(`('${cnpj}', '${nome}')`);

        const row = [
            `'${cnpj}'`,
            `'${infos[3]}'`,
            `'${infos[4]}'`,
            `'${infos[5]}'`,
            `'${infos[6]}'`,
            `'${infos[7]}'`,
            infos[8]  ? infos[8]  : 'NULL',
            infos[9]  ? infos[9]  : 'NULL',
            infos[10] ? infos[10] : 'NULL',
            infos[11] ? infos[11] : 'NULL',
            infos[12] ? infos[12] : 'NULL',
            infos[13] ? infos[13] : 'NULL',
            infos[14] ? infos[14] : 'NULL',
            `'${infos[15]}'`,
            `'${infos[16]}'`,
            `'${infos[17]}'`
        ];

        valuesBatch.push(`(${row.join(',')})`);

        if (valuesBatch.length === BATCH_SIZE || i === totalLines - 1) {
            const cnpjValues = Array.from(cnpjBatchSet).join(',\n');
            await sql(`
                INSERT INTO fi_cadastro (cnpj, nome)
                VALUES ${cnpjValues}
                ON CONFLICT (cnpj) DO NOTHING;
            `);

            await sql(`INSERT INTO fi_carteira (
                cnpj, data_competencia, tipo_aplicacao, tipo_ativo, emissor_ligado, tipo_negociacao, 
                quantidade_venda_negociacao, valor_venda_negociacao, quantidade_aquisicao_negociacao, valor_aquisicao_negociacao,
                quantidade_posicao_final, valor_mercado_posicao_final, valor_custo_posicao_final, data_confidencialidade_aplicacao, 
                codigo_swap, descricao_swap
            )
            VALUES ${valuesBatch.join(',\n')}
            ON CONFLICT DO NOTHING;`);

            valuesBatch = [];
            cnpjBatchSet.clear();
        }
    }
}