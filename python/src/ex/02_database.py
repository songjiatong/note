from mysql.connector import connect

link=connect(user='root',port=3306,host='localhost',passwd='')

sql='CREATE DATABASE IF NOT EXISTS web2003_1 CHARSET=utf8'

link.cursor().execute(sql)