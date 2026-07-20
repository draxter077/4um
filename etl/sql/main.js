import PG from 'pg'

const client = new PG.Pool({
    user: "postgres",
    host: "localhost",
    database: "quatroum",
    password: "vR4j9^@kçAop90S%h",
    port: "5432"
})

client.connect(function(err){if(err){console.log(err)}else{console.log("4UM // Connected to SQL")}})

export default async function sql(q){
    let r = await client.query(q)
    return r
}