class Father:
  __money='900元'
  name='东东'
  @staticmethod
  def __show():
    print('我是私有方法')
  def __init__(self,name):
    # 私有的属性 name
    self.__name=name

print(Father.name)