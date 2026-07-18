import psycopg2

clientsCsvFilePath = "/home/philippe/Downloads/clients.csv"

params = {"host":"localhost","database":"NOME","user":"postgres","password":"vR4j9^@kçAop90S%h","port":5432}
conn = psycopg2.connect(**params)
cur = conn.cursor()

def createTables():
    print("Criando tabelas...")
    cur.execute('CREATE TABLES clients (id VARCHAR PRIMARY KEY, name VARCHAR, cnpj VARCHAR, email VARCHAR, whatsapp VARCHAR, domain VARCHAR, password VARCHAR)')
    conn.commit()
    print("Tabelas criadas!")

print("Abrindo os arquivos .csv")
clientsCsv = open(clientsCsvFilePath,"r")
clientsCsvLines = clientsCsv.readlines()

for i in range(1, len(clientsCsvLines)):
    print(f"clients {i}/{len(clientsCsvLines)}", end="\r")
    l = clientsCsvLines[i]
    rows = l.split(",")
    lId = rows[0].replace("'","").replace('"','')
    cur.execute(f"INSERT INTO clients VALUES ('{lId}',...)")

conn.commit()
conn.close()
print("Pronto!")
