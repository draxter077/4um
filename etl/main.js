import sql from "./sql/main.js"
import cvm from "./cvm/main.js";
import anbima from "./anbima/main.js";

async function main(){
    await cvm(sql);
    await anbima(sql);

    console.log(">> ETL concluído")
    return true;
}

await main();

// estratégia de big player (volume, quantiade, numero), z-score, spread, última, ativos mais comprados,
// composição de cada fundo, ativos com base nas maiores rentabilidades
// front end jutnar por gestor