# UNSIGNED 无符号的

from mysql.connector import connect

sql='''
CREATE TABLE IF NOT EXISTS student(
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255),
  age TINYINT UNSIGNED,
  phone CHAR(11),
  sex TINYINT UNSIGNED
)
'''

link = connect(user='root',passwd='',host='localhost',port=3306,database='web2003')

link.cursor().execute(sql)
