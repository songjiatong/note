from mysql.connector import connect

sql='INSERT INTO student VALUES (null,%s,%s,%s,%s)'

args=[
  ('Tom',23,'12099998888',1), 
  ('Jack',22,'12099298848',1), 
  ('Jueery',33,'12099948888',0), 
  ('Kate',53,'12099938888',1), 
]

link=connect(user='root',passwd='',port=3306,host='localhost',database='web2003')

link.cursor().executemany(sql,args)
link.commit()