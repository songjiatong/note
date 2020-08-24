def show(name:str,age=34):
  print(name,age)

show('Tom',23)
show('Tom')



def show1(*argus):
  print(argus)

show1(21,10)
show1(2,3,3,3)



def show2(a,b,c):
  print(a+b+c)

show2(1,2,3)
arr=[3,4,5]
show2(*arr)




def content(dbname='web2003',host='localhost',port='3306',user='root',pwd='123456'):
  print(dbname,host,port,user,pwd)

content(pwd='666666')
argus={
  'dbname':'web2003',
  'host':'172.0.0.1',
  'port':3306,
  'user':'root',
  'pwd':'123456'
}
content(**argus)



def show3():
  return 123,'Tom','girl'

print(show3())




def run(a,b):
  if a>b:
    a,b=b,a
  arr=[]
  for i in range(a,b+1):
    if i&400==0 or (i%4==0 and i%100 is not 0):
      arr.append(i)
  print(tuple(arr))

run(2020,2000)


def sum(a,b):
  sum=0
  for i in range(a,b+1):
    sum+=i
  return sum

a=sum(3,33)
print(a)



def add1(*augrs):
  sum=0
  for i in range(0,len(augrs)):
    sum+=augrs[i]
  print(sum)

add1(3,3,3,3,3)
add1(3,3,2)



def max(*args):
  max=args[0]
  for i in args:
    if i>max:
      max=i
  print(max)

max(3,2,2,33,22,34,45)


arr1=[1,2,3,4,5]
sum=0
for i in range(0,len(arr1)):
  if i%2 == 0:
    sum+=arr1[i]
print(sum)


def jiecheng(*args):
  sum=1
  for i in args:
    sum*=i
  print(sum)

jiecheng(2,1,3,4)


def avg(*args):
  sum=1
  for i in args:
    sum+=i
  print(sum/len(args))

avg(3,4,5,6)