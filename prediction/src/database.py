import pymysql
from time import sleep
from .predict import getPrediction

 # Connect to the database, library name: cenius
host = 'ceniusdb.cykbq2tyxcdu.us-east-2.rds.amazonaws.com'
port = 3306
dbname = 'ceniusdb'
user = 'admin'
pwd = '1q2w#E$R'
db = pymysql.connect(
    host=host,
    port=port,
    user=user,
    password=pwd,
    db=dbname
)
 # Create a cursor
cursor = db.cursor()

def create():
    sql = 'create table if not exists currency(t integer primary key, prediction real default null, realVal real default null)'
    cursor.execute(sql)
    db.commit()

def insert(newPred, updatePred):
    sql = 'insert into currency(t, prediction) select %s, %s where not exists(select * from currency where t=%s)'
    cursor.execute(sql, newPred)
    db.commit() 

    sql = 'update currency set prediction=%s where t=%s'
    cursor.execute(sql, updatePred)
    db.commit() 

def update(data):
    for d in data:
        sql = 'update currency set realVal=%s where t=%s'
        cursor.execute(sql, (d[1], d[0]))
        db.commit() 

'''
 # Close the database connection
cursor.close()
db.close()
'''

def migrate():
    while True:
        # insert prediction
        data = getPrediction()

        newPred = []
        updatePred = []

        for d in data:
            newPred.append((d[0], d[1], d[0]))
            updatePred.append((d[1], d[0]))
        insert(newPred, updatePred)

        #update current currency
        data = getCurrent()
        update(data)
        sleep(60)
