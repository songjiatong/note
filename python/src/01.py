print('Hello Word!')
# name=input('主人的名字是：')
# print ('欢迎：',name)

print('he said:"I\'m fine"')

name='Tom'
print ('名字是：%s'% name)

names = ['lucy', 'lily', 'lisa', 'mike']
# <class 'list'>
print(type(names))
# 增
# js中： arr.push()
names.append('亮亮') # 添加到结尾
print(names)
names.insert(1, '东东') # 插入到指定序号位
print(names)
# 删
names.pop(1) # 删除指定序号
print(names)
# 改
names[1] = '改动值'
print(names)



emp={'name':'Tom','age':'23','sex':'男'}
# 增
emp['phone']='10086'
print(emp)
# 删
emp.pop('phone')
print(emp)

# 该
emp['name']='Jeck'
print(emp)
# 查
print(emp['age'])

print(5>3)
print(5==3)

print(5=='5')
print(1==True)
print(0==False)

print(not True)
print(False and True)
print(True and True)
print(False or True)
print(True or False)

if True:
  print('是真的')
else:
  print('是假的')

num = 121
if num<60 and num >0:
  print('成绩不合格')
elif num>=60 and num<80:
  print('成绩合格')
elif num<=80 and num<=100:
  print('优秀')
else:
  print('成绩错误')

users = ['Tom','Jueery','Kate','Jack']
for user in users:
  print(user)

for i in range(10):
  print(str(i))


print(list(range(3,10)))
print(list(range(1,10,2)))


sum=0
for i in range(101):
  sum+=i
print(sum)

sum1=0
for i in range(200,301):
  if i%2==0:
    sum1+=i
print(sum1)

arr=[]
for i in range(1900,2021):
  if i%400==0 or (i%4==0 and i%100 is not 0):
    arr.append(i)
print(arr)

for tu in range(36):
  ji=35-tu
  if ji*2+tu*4==94:
    print('鸡%s,兔%s' % (ji,tu))

for gj in range(21):
  for mj in range(34):
    xj=100-gj-mj
    if gj*5+mj*3+xj/3==100:
      print('公鸡:%s,母鸡：%s,小鸡：%s' % (gj,mj,xj))


nums=[23,345,3,323,33,333,21,1,3]
for i in range(len(nums)-1):
  for j in range(len(nums)-1):
    if nums[j]>nums[j+1]:
      nums[j],nums[j+1]=nums[j+1],nums[j]
print(nums)

arrs=[33,2323,54,323,2,2,43,34,34,22,222,222,2222,54]
for i in range(len(arrs)):
  for j in range(i,len(arrs)-1):
    # print(arrs[i],arrs[j+1])
    if arrs[i]==arrs[j+1]:
      arrs.pop(i)
      break
print(arrs)

i=0
sum2=0
while True:
  sum+=i
  if sum>1e6:
    print('n是：%s' % i)
    break
  i+=1

for i in range(20):
  if i%2==0:
    continue
  print(i)
  if i>14:
    break
