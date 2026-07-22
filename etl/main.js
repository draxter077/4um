import sql from "./sql/main.js"
import cvm from "./cvm/main.js";
import anbima from "./anbima/main.js";

async function main(){
    await cvm(sql);
    await anbima(sql);

    console.log(">> ETL concluído")
}

await main();