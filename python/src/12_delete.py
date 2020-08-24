from mysql.connector import connect

sql='DELETE FROM student WHERE id<5'

link=connect(user='root',passwd='',host='localhost',port=3306,database='web2003')

mycusrsor=link.cursor()
mycusrsor.execute(sql)
rows=mycusrsor.rowcount
print('删除的条数:',rows)

link.commit()