from mysql.connector import connect

link=connect(user='root',passwd='',host='localhost')
print(link)