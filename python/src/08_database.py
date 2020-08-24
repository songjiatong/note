from mysql.connector import connect

sql = 'CREATE DATABASE IF NOT EXISTS web2003 CHARSET=utf8'
# 搭建数据库连接
link = connect(user='root', passwd="", host='localhost', port=3306)
# 传递sql给数据库 并 执行
link.cursor().execute(sql)
# cursor(): 连接中 操作数据库的 句柄, 可以理解为: 遥控器
# execute(): 执行sql的方法