from mysql.connector import connect

sql='UPDATE student SET sex=%s WHERE age>%s'


link=connect(user='root',passwd='',host='localhost',port=3306,database='web2003')
args=(3,30)

link.cursor().execute(sql,args)
link.commit()