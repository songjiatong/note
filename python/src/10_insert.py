from mysql.connector import connect

sql='INSERT INTO student VALUES (null,%s,%s,%s,%s)'

args=('Tom',23,'12312345641',1)

link=connect(user='root',passwd='',port=3306,host='localhost',database='web2003')

link.cursor().execute(sql,args)

link.commit()