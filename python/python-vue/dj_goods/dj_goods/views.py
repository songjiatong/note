from django.http import HttpResponse,JsonResponse
from mysql.connector import connect

def connectDB():
  return connect(database='web2003',port=3306,user='root',passwd='',host='localhost')

def index(req):
  return HttpResponse('<h1>Hello ,商品接口</h1>')

def goodsList(req):
  sql='SELECT * FROM student'
  link=connectDB()
  mycursor=link.cursor(dictionary=True)
  mycursor.execute(sql)
  res=mycursor.fetchall()

  return JsonResponse({'data':res})