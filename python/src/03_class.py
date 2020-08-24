class Math:
  PI=3.141592653
  E=2.718281828459045
  Ln10=2.15651131
  LOGIOE=0.5241511111121
  @staticmethod
  def abs(num):
    return num if num>0 else -num
  def pow(base,exp):
    return base ** exp
  def sum(*args):
    sum=0
    for i in args:
      sum+=i
    return sum

print(Math.E)
print(Math.abs(-9))
print(Math.abs(9))
print(Math.pow(2,10))
print(Math.sum(3,2,3,4,43,43,4))



class Student:
  def __init__(self,name,age,phone):
    self.name=name
    self.age=age
    self.phone=phone
  def desc(self):
    print(self.name,self.age,self.phone)

ls=Student('Tom',23,'12323343212')

print(ls.age,ls.name,ls.phone)
ls.desc()



# ex:
class Reactangle:
  def __init__(self,width,height):
    self.width=width
    self.height=height
  def area(self):
    return self.width*self.height
  def perimeter(self):
    return (self.width+self.height)*2

rg=Reactangle(100,50)
print(rg.perimeter(),rg.area())



# 继承扩展特征
class Person:
  def __init__(self,name,age,sex):
    self.name=name
    self.age=age
    self.sex=sex
  def eat(self):
    print(self.name,'喀什诺威')
  def sleep(self):
    print(self.name,'摩奥阔斯特')

per=Person('Tom','23','男')
per.eat()
per.sleep()

# 继承
class Son(Person):
  def study(self):
    print(self.name,'伊泽奎尔')

st=Son('Tom','23','男')
st.study()

# 重写
class Sons(Person):
  def __init__(self,name,age,sex,phone,sid):
    
    # super :代表父类
    super().__init__(self,name,age,sex)
    self.phone=phone
    self.sid=sid
    self.sex=sex
  def desc(self):
    print(self.age,self.sex,self.sid,self.phone)

sl=Sons(self)
sl.desc()