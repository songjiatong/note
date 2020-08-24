# 引入系统的模块
from datetime import datetime

now=datetime.now()
print(now)

print('%s年%s月%s日' % (now.year,now.month,now.day))
print('%s时%s分%s秒' % (now.hour,now.minute,now.second))