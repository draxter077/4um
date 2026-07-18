import PG from 'pg'

const client = new PG.Pool({
    user: "postgres",
    host: "localhost",
    database: "NOME",
    password: "vR4j9^@kçAop90S%h",
    port: "5432"
})

client.connect(function(err){if(err){console.log(err)}else{console.log("NOME // Connected to SQL")}})

async function query(text){
    let r = await client.query(text)
    return r
}

export default async function sql(q){
    const r = await query(q)
    return(r)
}

export async function createTables(){
    await sql(`CREATE TABLES clients (id VARCHAR PRIMARY KEY, name VARCHAR, email INT, password FLOAT`)
}