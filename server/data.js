export async function makeId(sql, n, type){
    let ids = []
    let table = ""
    if(type == "c" || type == "z"){table = "clients"}
    else if(type == "p"){table = "payments"}
    else if(type == "o"){table = "orders"}

    let is = await sql(`SELECT id FROM ${table}`)
    for(let i = 0; i < is.rows.length; i++){
        ids.push(is.rows[i].id)
    }

    const chars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 
                    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
                    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    let id = ""

    while(id == ""){
        id += type
        for(let i = 0; i < n; i++){
            let c = Math.floor((chars.length)*Math.random())
            id += chars[c]
        }

        if(ids.includes(id)){id = ""}
    }
    return(id)
}