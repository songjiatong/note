from mysql.connector import connect

sql='SELECT *  FROM student LIMIT 1'


link=connect(user='root',passwd='',host='localhost',port=3306,database='web2003')

# dictionary=True  查询结果为字典类型
mycusrsor=link.cursor(dictionary=True)
mycusrsor.execute(sql)

res=mycusrsor.fetchone()

print(res)