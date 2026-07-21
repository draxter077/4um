export default async function main(AdmZip, sql) {
    await sql(`CREATE TABLE IF NOT EXISTS fi_informe (
        cnpj VARCHAR,id_subclasse VARCHAR,data_competencia VARCHAR,valor_total FLOAT,
        valor_quota FLOAT,valor_patrimonio_liquido FLOAT,captacao_dia FLOAT,resgate_dia FLOAT,numero_cotistas INT,

        PRIMARY KEY (cnpj, data_competencia)
    );`);
    const monthness = 6;
    const d = new Date();
    const nowYear = d.getFullYear();
    let nowMonth = d.getMonth() + 1;

    for (let i = 1; i < monthness + 1; i++) {
        try {
            let refYear = nowYear;
            let refMonth = nowMonth - monthness + i;
            if (refMonth <= 0) {
                refMonth += 12;
                refYear -= 1;
            }
            if (refMonth < 10) { refMonth = "0" + refMonth; }
            process.stdout.write(`>> Atualizando informes diários ${refYear}${refMonth}   \r`);

            const response = await fetch(`https://dados.cvm.gov.br/dados/FI/DOC/INF_DIARIO/DADOS/inf_diario_fi_${refYear}${refMonth}.zip`);
            const bufferPuro = await response.arrayBuffer();
            const buffer = Buffer.from(bufferPuro);
            const zip = new AdmZip(buffer);
            const archive = zip.getEntries()[0];
            const text = archive.getData().toString('latin1');
            const lines = text.split('\n');
            const totalLines = lines.length;
            const BATCH_SIZE = 10000;
            let valuesBatch = [];
            let cnpjBatchSet = new Set();

            for (let j = 1; j < totalLines; j++) {
                if (!lines[j].trim()) continue;
                const infos = lines[j].split(";");
                const cnpj = infos[1] ? infos[1].trim() : null;
                if (!cnpj) continue;

                cnpjBatchSet.add(`('${cnpj}', '${cnpj}')`);

                const row = [
                    `'${cnpj}'`,
                    `'${infos[2]}'`,
                    `'${infos[3]}'`,
                    infos[4] ? infos[4] : 'NULL',
                    infos[5] ? infos[5] : 'NULL',
                    infos[6] ? infos[6] : 'NULL',
                    infos[7] ? infos[7] : 'NULL',
                    infos[8] ? infos[8] : 'NULL',
                    infos[9] ? infos[9] : 'NULL'
                ];
                valuesBatch.push(`(${row.join(',')})`);

                if (valuesBatch.length === BATCH_SIZE || j === totalLines - 1) {
                    const cnpjValues = Array.from(cnpjBatchSet).join(',\n');
                    await sql(`
                        INSERT INTO fi_cadastro (cnpj, nome)
                        VALUES ${cnpjValues}
                        ON CONFLICT (cnpj) DO NOTHING;
                    `);

                    await sql(`INSERT INTO fi_informe (
                        cnpj,id_subclasse,data_competencia,valor_total,
                        valor_quota,valor_patrimonio_liquido,captacao_dia,resgate_dia,numero_cotistas)

                        VALUES ${valuesBatch.join(',\n')}

                        ON CONFLICT DO NOTHING;`);

                    valuesBatch = [];
                    cnpjBatchSet.clear();
                }
            }
        }
        catch (error) {
            console.log(`ERRO: ${error.message}`);
        }
    }
    console.log(">> Informes diários atualizados    ");
}