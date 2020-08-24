from mysql.connector import connect
link=connect(user='root',passwd='',port=3306,host='localhost')
print(link)