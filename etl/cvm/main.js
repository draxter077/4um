// compl velho
import AdmZip from "adm-zip";
import cad_fi from "./cad_fi/main.js"
import cda from "./cda/main.js"
import inf_diario from "./inf_diario/main.js";
import lamina from "./lamina/main.js"

export default async function main(sql){
    await cad_fi(sql);
    await cda(AdmZip,sql);
    await inf_diario(AdmZip,sql);
    await lamina(AdmZip,sql)
}