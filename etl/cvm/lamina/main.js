export default async function main(AdmZip,sql){
    await sql(`CREATE TABLE IF NOT EXISTS fi_rentabilidades (
        cnpj VARCHAR, id_subclasse VARCHAR, data_competencia VARCHAR, tipo VARCHAR,
        referencia VARCHAR, rentabilidade FLOAT, variacao_referencia FLOAT, perfomance FLOAT, observacao VARCHAR,

        PRIMARY KEY(cnpj, tipo, referencia)
    );`);
    const monthness = 6;
    const d = new Date();
    const nowYear = d.getFullYear();
    let nowMonth = d.getMonth() + 1;

    // Loop para varrer os últimos 6 meses
    for(let i = 0; i < monthness; i++){
        try{
            let refYear = nowYear;
            let refMonth = nowMonth - monthness + i;
            if(refMonth <= 0){
                refMonth += 12;
                refYear -= 1;
            }
            if(refMonth < 10){refMonth = "0" + refMonth;}
            process.stdout.write(`>> Atualizando lâmina ${refYear}${refMonth}       \r`);
            const response = await fetch(`https://dados.cvm.gov.br/dados/FI/DOC/LAMINA/DADOS/lamina_fi_${refYear}${refMonth}.zip`);
            const bufferPuro = await response.arrayBuffer();
            const buffer = Buffer.from(bufferPuro); //Conversão para o formato Buffer que o NodeJS e o adm-zip entendem
            const zip = new AdmZip(buffer);
            const archives = zip.getEntries(); // Lista todos os arquivos internos
            for(let j = 0; j < archives.length; j++){
                const name = archives[j].entryName;
                if(name.includes("ano") || name.includes("mes")){
                    const text = archives[j].getData().toString('latin1');
                    const lines = text.split("\n");
                    const totalLines = lines.length;
                    const BATCH_SIZE = 10000;
                    let valuesBatch = [];
                    for(let k = 1; k < totalLines; k++){
                        if(!lines[k].trim()) continue;
                        const infos = lines[k].split(";");
                        const tipo = name.includes("ano") ? "Anual" : "Mensal";
                        const row = [
                            `'${infos[1]}'`, // CNPJ_FUNDO_CLASSE
                            `'${infos[2]}'`, // ID_SUBCLASSE
                            `'${infos[4]}'`, // DT_COMPTC
                            `'${tipo}'`,     // tipo
                            `'${infos[5]}'`, // REFERENCIA
                            infos[6] ? infos[6] : 'NULL', // PR_RENTAB
                            infos[7] ? infos[7] : 'NULL', // VARIACAO_REFERENCIA
                            infos[8] ? infos[8] : 'NULL', // PERFORMANCE
                            `'${infos[9]}'`  // OBS
                        ];
                        valuesBatch.push(`(${row.join(',')})`);
                        if(valuesBatch.length === BATCH_SIZE || k === totalLines - 1){
                            await sql(`INSERT INTO fi_rentabilidades (
                                    cnpj, id_subclasse, data_competencia, tipo,
                                    referencia, rentabilidade, variacao_referencia, perfomance, observacao
                                )

                                VALUES ${valuesBatch.join(',\n')}
                                
                                ON CONFLICT DO NOTHING;`);
                            valuesBatch = [];
                        }
                    }
                }
            }
        }
        catch(error){
            console.log(`ERRO: ${error.message}`);
        }
    }
    console.log(">> Lâmina atualizada  ");
}