import { Builder, Browser, By, until } from "selenium-webdriver";
import firefox from "selenium-webdriver/firefox.js";

async function test(messy, driver){
    try{
        await driver.wait(until.elementLocated(By.xpath(`/html/body/div[${messy}]/main/section/div[2]/table/tbody/tr[1]`)), 30000);
    }
    catch(erro){
        throw erro;
    }
}

export default async function main(sql){
    console.log(">> Atualizando negociações de títulos públicos");
    await sql(`CREATE TABLE IF NOT EXISTS negociacao_titulos_publicos (
            data_referencia VARCHAR, nome_titulo VARCHAR, data_vencimento VARCHAR, isin VARCHAR,
            provedor VARCHAR, edital VARCHAR, horario_referencia VARCHAR, prazo VARCHAR, fechamento_anterior FLOAT,
            indicativo_superior FLOAT, taxa_maxima FLOAT, taxa_media FLOAT, taxa_minima FLOAT,
            indicativo_inferior FLOAT, valor_ultima FLOAT, valor_oferta_compra FLOAT, valor_oferta_venda FLOAT,
            numero_negocios FLOAT, quantidade_negociada FLOAT, volume_negociado FLOAT, flag_violacao VARCHAR,

            PRIMARY KEY(data_referencia, data_vencimento, isin, provedor, horario_referencia)
        )
    ;`);
    const messy = 2;
    let options = new firefox.Options();
    options.addArguments('--headless'); 
    const driver = await new Builder().forBrowser(Browser.FIREFOX).setFirefoxOptions(options).build();
    const BATCH_SIZE = 50;
    let valuesBatch = [];
    try {
        await driver.get('https://data.anbima.com.br/datasets/data-titulos-publicos-dados-negociacao-publico');
        await test(messy, driver);
        const numberOfPages = await driver.findElement(By.xpath(`/html/body/div[${messy}]/main/section/div[3]/div[3]/span/a`)).getText();
        const numberOfLines = await driver.findElement(By.xpath(`/html/body/div[${messy}]/main/section/div[3]/div[2]/span`)).getText();
        const totalPages = Number(numberOfPages);
        const linesPerPage = Number(numberOfLines.split(" ")[3]);
        for(let i = 0; i < totalPages; i++){
            for(let j = 1; j < linesPerPage + 1; j++){
                process.stdout.write(`  Atualizando ${Math.round(((i/totalPages)*10000)/100)}%     \r`);
                try{
                    const data_referencia = await driver.findElement(By.xpath(`/html/body/div[${messy}]/main/section/div[2]/table/tbody/tr[${j}]/td[1]/span`)).getText();
                    const nome_titulo = await driver.findElement(By.xpath(`/html/body/div[${messy}]/main/section/div[2]/table/tbody/tr[${j}]/td[2]/span`)).getText();
                    const data_vencimento = await driver.findElement(By.xpath(`/html/body/div[${messy}]/main/section/div[2]/table/tbody/tr[${j}]/td[3]/span`)).getText();
                    const isin = await driver.findElement(By.xpath(`/html/body/div[${messy}]/main/section/div[2]/table/tbody/tr[${j}]/td[4]/span`)).getText();
                    const provedor = await driver.findElement(By.xpath(`/html/body/div[${messy}]/main/section/div[2]/table/tbody/tr[${j}]/td[5]/span`)).getText();
                    const edital = await driver.findElement(By.xpath(`/html/body/div[${messy}]/main/section/div[2]/table/tbody/tr[${j}]/td[6]/span`)).getText();
                    const horario_referencia = await driver.findElement(By.xpath(`/html/body/div[${messy}]/main/section/div[2]/table/tbody/tr[${j}]/td[7]/span`)).getText();
                    const prazo = await driver.findElement(By.xpath(`/html/body/div[${messy}]/main/section/div[2]/table/tbody/tr[${j}]/td[8]/span`)).getText();
                    const fechamento_anterior = await driver.findElement(By.xpath(`/html/body/div[${messy}]/main/section/div[2]/table/tbody/tr[${j}]/td[9]/span`)).getText();
                    const indicativo_superior = await driver.findElement(By.xpath(`/html/body/div[${messy}]/main/section/div[2]/table/tbody/tr[${j}]/td[10]/span`)).getText();
                    const taxa_maxima = await driver.findElement(By.xpath(`/html/body/div[${messy}]/main/section/div[2]/table/tbody/tr[${j}]/td[11]/span`)).getText();
                    const taxa_media = await driver.findElement(By.xpath(`/html/body/div[${messy}]/main/section/div[2]/table/tbody/tr[${j}]/td[12]/span`)).getText();
                    const taxa_minima = await driver.findElement(By.xpath(`/html/body/div[${messy}]/main/section/div[2]/table/tbody/tr[${j}]/td[13]/span`)).getText();
                    const indicativo_inferior = await driver.findElement(By.xpath(`/html/body/div[${messy}]/main/section/div[2]/table/tbody/tr[${j}]/td[14]/span`)).getText();
                    const valor_ultima = await driver.findElement(By.xpath(`/html/body/div[${messy}]/main/section/div[2]/table/tbody/tr[${j}]/td[15]/span`)).getText();
                    const valor_oferta_compra = await driver.findElement(By.xpath(`/html/body/div[${messy}]/main/section/div[2]/table/tbody/tr[${j}]/td[16]/span`)).getText();
                    const valor_oferta_venda = await driver.findElement(By.xpath(`/html/body/div[${messy}]/main/section/div[2]/table/tbody/tr[${j}]/td[17]/span`)).getText();
                    const numero_negocios = await driver.findElement(By.xpath(`/html/body/div[${messy}]/main/section/div[2]/table/tbody/tr[${j}]/td[18]/span`)).getText();
                    const quantitdade_negociada = await driver.findElement(By.xpath(`/html/body/div[${messy}]/main/section/div[2]/table/tbody/tr[${j}]/td[19]/span`)).getText();
                    const volume_negociado = await driver.findElement(By.xpath(`/html/body/div[${messy}]/main/section/div[2]/table/tbody/tr[${j}]/td[20]/span`)).getText();
                    const flag_violacao = await driver.findElement(By.xpath(`/html/body/div[${messy}]/main/section/div[2]/table/tbody/tr[${j}]/td[21]/span`)).getText();

                    const row = [
                        `'${data_referencia}'`,
                        `'${nome_titulo}'`,
                        `'${data_vencimento}'`,
                        `'${isin}'`,
                        `'${provedor}'`,
                        `'${edital}'`,
                        `'${horario_referencia}'`,
                        `'${prazo}'`,
                        (fechamento_anterior && fechamento_anterior.trim() !== '-') ? fechamento_anterior.replaceAll(".","").replaceAll(",",".") : 'NULL',
                        (indicativo_superior && indicativo_superior.trim() !== '-') ? indicativo_superior.replaceAll(".","").replaceAll(",",".") : 'NULL',
                        (taxa_maxima && taxa_maxima.trim() !== '-') ? taxa_maxima.replaceAll(".","").replaceAll(",",".") : 'NULL',
                        (taxa_media && taxa_media.trim() !== '-') ? taxa_media.replaceAll(".","").replaceAll(",",".") : 'NULL',
                        (taxa_minima && taxa_minima.trim() !== '-') ? taxa_minima.replaceAll(".","").replaceAll(",",".") : 'NULL',
                        (indicativo_inferior && indicativo_inferior.trim() !== '-') ? indicativo_inferior.replaceAll(".","").replaceAll(",",".") : 'NULL',
                        (valor_ultima && valor_ultima.trim() !== '-') ? valor_ultima.replaceAll(".","").replaceAll(",",".") : 'NULL',
                        (valor_oferta_compra && valor_oferta_compra.trim() !== '-') ? valor_oferta_compra.replaceAll(".","").replaceAll(",",".") : 'NULL',
                        (valor_oferta_venda && valor_oferta_venda.trim() !== '-') ? valor_oferta_venda.replaceAll(".","").replaceAll(",",".") : 'NULL',
                        (numero_negocios && numero_negocios.trim() !== '-') ? numero_negocios.replaceAll(".","").replaceAll(",",".") : 'NULL',
                        (quantitdade_negociada && quantitdade_negociada.trim() !== '-') ? quantitdade_negociada.replaceAll(".","").replaceAll(",",".") : 'NULL',
                        (volume_negociado && volume_negociado.trim() !== '-') ? volume_negociado.replaceAll(".","").replaceAll(",",".") : 'NULL',
                        `'${flag_violacao}'`
];
                    valuesBatch.push(`(${row.join(',')})`);
                    if(valuesBatch.length == BATCH_SIZE || i == totalPages - 1){
                        await sql(`INSERT INTO negociacao_titulos_publicos (
                                data_referencia, nome_titulo, data_vencimento, isin,
                                provedor, edital, horario_referencia, prazo, fechamento_anterior,
                                indicativo_superior, taxa_maxima, taxa_media, taxa_minima,
                                indicativo_inferior, valor_ultima, valor_oferta_compra, valor_oferta_venda,
                                numero_negocios, quantidade_negociada, volume_negociado, flag_violacao
                            )
                            VALUES ${valuesBatch.join(',\n')}
                            ON CONFLICT DO NOTHING;`);
                        valuesBatch = [];
                    }
                }
                catch(error){
                    if(i !== totalPages - 1){ throw error; }
                }
            }
            if(i < totalPages - 1){
                await driver.executeScript("arguments[0].click();", driver.findElement(By.id("pagination-next-button")));
                await test(messy, driver);
            }
        }
    }
    finally {
        await driver.quit();
    }
}