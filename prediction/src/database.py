import pymysql
from time import sleep
from .predict import getPrediction

 # Connect to the database, library name: cenius
host = 'cenius.cykbq2tyxcdu.us-east-2.rds.amazonaws.com'
port = 3306
dbname = 'cenius'
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
    sql = 'create table currency(timestamp timestamp, prediction float(2), real float(2))'
    cursor.execute(sql)
    db.commit()

def insert(data):
    sql = 'insert into user(timestamp, prediction, real) values(?, %f, %f) on duplicate key update'
    cursor.execute(sql, data)
    db.commit() 

'''
 # Close the database connection
cursor.close()
db.close()
'''

def migrate():
    while True:
        data = getPrediction()
        insert(data)
        sleep(60)
