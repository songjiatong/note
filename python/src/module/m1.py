print('m1被引用了')
name='Tom'
hobby='dance'

def show():
  print('Hello Word!')

class Demo:
  @staticmethod
  def show():
    print('静态方法show')