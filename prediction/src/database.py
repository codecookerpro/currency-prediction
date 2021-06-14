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
    sql = 'create table currency(timestamp timestamp primary key, prediction real, real real)'
    cursor.execute(sql)
    db.commit()

def insert(data):
    sql = 'insert into currency(timestamp, prediction) values(?, ?) on duplicate key update'
    cursor.execute(sql, data)
    db.commit() 

def update(data):
    for d in data:
        sql = 'update currency set real=? where timestamp=?'
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
        insert(data)

        #update current currency
        data = getCurrent()
        update(data)
        sleep(60)
