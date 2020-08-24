import m1
m1.show()
m1.Demo.show()

from m1 import name,show,Demo as Dmm
Dmm.show()
show()


# 引入包中的模块
import user.login as ul
from user.login import login_pwd
print(ul.login_user)
print(login_pwd)