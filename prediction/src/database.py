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

def insert(data):
    sql = 'insert into currency(t, prediction) values(%s, %s) on duplicate key update prediction=%s'
    cursor.execute(sql, data)
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
        print(data)
        insert(data)

        #update current currency
        data = getCurrent()
        update(data)
        sleep(60)
