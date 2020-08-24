SET NAMES UTF8;
DROP DATABASE IF EXISTS bobo;
CREATE DATABASE bobo CHARSET=UTF8;
USE bobo;

/**衣服**/
CREATE TABLE bobo_clothing(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  family_id int(11) DEFAULT NULL,
  title VARCHAR(256),         #主标题
  season VARCHAR(8),          #季节
  hot_sale VARCHAR(8),        #选购热点
  price DECIMAL(6,2),         #价格
  promise VARCHAR(64),        #服务承诺
  brand VARCHAR(32),          #品牌
  bname VARCHAR(32),          #商品名称
  gross_weight VARCHAR(32),   #商品毛重
  orngin_goods VARCHAR(32),   #商品产地
  shelf_time BIGINT,          #上架时间
  is_onsale BOOLEAN,           #是否促销中
  is_pay_on_delivery BOOLEAN,                 #是否支持货到付款
  is_quality_goods BOOLEAN,                    #是否正品
  is_free_freight_insurance BOOLEAN,           #是否购买运费险
  is_seven_days_no_reason_to_return BOOLEAN   #是否七天无理由退货
);

INSERT INTO bobo_clothing VALUES(1,1,'七匹狼新品短袖T恤男2018新款男装圆领纯色莫代尔黑色男士短袖T恤衫半袖上衣打底衫浅绿色','夏季','T恤衫',129.00,'商家承诺:按时发货按时送达','七匹狼','七匹狼新品短袖T恤男2018新款男装圆领纯色莫代尔黑色男士短袖T恤衫半袖上衣打底衫浅绿色','0.6kg','中国大陆',189278,1,1,0,1,1);
INSERT INTO bobo_clothing VALUES(2,1,'七匹狼新品短袖T恤男2018新款男装圆领纯色莫代尔黑色男士短袖T恤衫半袖上衣打底衫浅绿色','冬季','T恤衫',89.00,'商家承诺:按时发货按时送达','七匹狼','七匹狼新品短袖T恤男2018新款男装圆领纯色莫代尔黑色男士短袖T恤衫半袖上衣打底衫浅绿色','0.5kg','中国大陆',189258,1,0,1,0,1);
INSERT INTO bobo_clothing VALUES(3,1,'七匹狼新品短袖T恤男2018新款男装圆领纯色莫代尔黑色男士短袖T恤衫半袖上衣打底衫浅绿色','秋季','T恤衫',29.00,'商家承诺:按时发货按时送达','七匹狼','七匹狼新品短袖T恤男2018新款男装圆领纯色莫代尔黑色男士短袖T恤衫半袖上衣打底衫浅绿色','0.8kg','中国大陆',189238,1,1,1,1,1);
INSERT INTO bobo_clothing VALUES(4,1,'七匹狼新品短袖T恤男2018新款男装圆领纯色莫代尔黑色男士短袖T恤衫半袖上衣打底衫浅绿色','春季','T恤衫',99.00,'商家承诺:按时发货按时送达','七匹狼','七匹狼新品短袖T恤男2018新款男装圆领纯色莫代尔黑色男士短袖T恤衫半袖上衣打底衫浅绿色','0.9kg','中国大陆',189378,1,1,0,1,1);
INSERT INTO bobo_clothing VALUES(5,1,'七匹狼新品短袖T恤男2018新款男装圆领纯色莫代尔黑色男士短袖T恤衫半袖上衣打底衫浅绿色','春季','T恤衫',129.00,'商家承诺:按时发货按时送达','七匹狼','七匹狼新品短袖T恤男2018新款男装圆领纯色莫代尔黑色男士短袖T恤衫半袖上衣打底衫浅绿色','0.7kg','中国大陆',183278,1,0,1,1,1);
INSERT INTO bobo_clothing VALUES(6,1,'七匹狼新品短袖T恤男2018新款男装圆领纯色莫代尔黑色男士短袖T恤衫半袖上衣打底衫浅绿色','冬季','T恤衫',179.00,'商家承诺:按时发货按时送达','七匹狼','七匹狼新品短袖T恤男2018新款男装圆领纯色莫代尔黑色男士短袖T恤衫半袖上衣打底衫浅绿色','0.6kg','中国大陆',184278,0,0,0,1,1);
INSERT INTO bobo_clothing VALUES(7,1,'七匹狼新品短袖T恤男2018新款男装圆领纯色莫代尔黑色男士短袖T恤衫半袖上衣打底衫浅绿色','春季','T恤衫',109.00,'商家承诺:按时发货按时送达','七匹狼','七匹狼新品短袖T恤男2018新款男装圆领纯色莫代尔黑色男士短袖T恤衫半袖上衣打底衫浅绿色','0.6kg','中国大陆',180278,1,0,0,1,1);
INSERT INTO bobo_clothing VALUES(8,1,'七匹狼新品短袖T恤男2018新款男装圆领纯色莫代尔黑色男士短袖T恤衫半袖上衣打底衫浅绿色','秋季','T恤衫',129.00,'商家承诺:按时发货按时送达','七匹狼','七匹狼新品短袖T恤男2018新款男装圆领纯色莫代尔黑色男士短袖T恤衫半袖上衣打底衫浅绿色','0.6kg','中国大陆',181278,0,1,0,1,1);
INSERT INTO bobo_clothing VALUES(9,2,'尤兰亚新品短袖T恤男2018新款男装圆领纯色莫代尔黑色男士短袖T恤衫半袖上衣打底衫浅绿色','春季','T恤衫',134.00,'商家承诺:按时发货按时送达','尤兰亚','尤兰亚新品短袖T恤男2018新款男装圆领纯色莫代尔黑色男士短袖T恤衫半袖上衣打底衫浅绿色','0.7kg','中国大陆',189267,1,1,0,0,1);

INSERT INTO bobo_clothing VALUES(10,2,'尤兰溪新品短袖T恤男2018新款男装圆领纯色莫代尔黑色男士短袖T恤衫半袖上衣打底衫浅绿色','春季','T恤衫',129.00,'商家承诺:按时发货按时送达','尤兰亚','尤兰亚新品短袖T恤男2018新款男装圆领纯色莫代尔黑色男士短袖T恤衫半袖上衣打底衫浅绿色','0.9kg','中国大陆',189278,0,1,0,1,1);
INSERT INTO bobo_clothing VALUES(11,3,'淑芝新品短袖T恤男2018新款男装圆领纯色莫代尔黑色男士短袖T恤衫半袖上衣打底衫浅绿色','冬季','T恤衫',124.00,'商家承诺:按时发货按时送达','淑芝','淑芝新品短袖T恤男2018新款男装圆领纯色莫代尔黑色男士短袖T恤衫半袖上衣打底衫浅绿色','0.8kg','中国大陆',189268,1,1,0,1,0);
INSERT INTO bobo_clothing VALUES(12,4,'古伊芙新品短袖T恤男2018新款男装圆领纯色莫代尔黑色男士短袖T恤衫半袖上衣打底衫浅绿色','春季','T恤衫',190.00,'商家承诺:按时发货按时送达','古伊芙','古伊芙新品短袖T恤男2018新款男装圆领纯色莫代尔黑色男士短袖T恤衫半袖上衣打底衫浅绿色','0.7kg','中国大陆',189778,1,1,0,0,1);
INSERT INTO bobo_clothing VALUES(13,4,'古伊芙新品短袖T恤男2018新款男装圆领纯色莫代尔黑色男士短袖T恤衫半袖上衣打底衫浅绿色','夏季','T恤衫',129.00,'商家承诺:按时发货按时送达','古伊芙','古伊芙新品短袖T恤男2018新款男装圆领纯色莫代尔黑色男士短袖T恤衫半袖上衣打底衫浅绿色','0.6kg','中国大陆',182278,1,0,0,1,0);
INSERT INTO bobo_clothing VALUES(14,5,'随意百顺新品短袖T恤男2018新款男装圆领纯色莫代尔黑色男士短袖T恤衫半袖上衣打底衫浅绿色','秋季','T恤衫',129.00,'商家承诺:按时发货按时送达','随衣百顺','随衣百顺新品短袖T恤男2018新款男装圆领纯色莫代尔黑色男士短袖T恤衫半袖上衣打底衫浅绿色','0.9kg','中国大陆',169278,1,0,1,1,1);
INSERT INTO bobo_clothing VALUES(15,6,'芙蕖新品短袖T恤男2018新款男装圆领纯色莫代尔黑色男士短袖T恤衫半袖上衣打底衫浅绿色','冬季','T恤衫',138.00,'商家承诺:按时发货按时送达','芙蕖','芙蕖新品短袖T恤男2018新款男装圆领纯色莫代尔黑色男士短袖T恤衫半袖上衣打底衫浅绿色','0.7kg','中国大陆',189277,1,1,0,1,1);
INSERT INTO bobo_clothing VALUES(16,6,'芙蕖新品短袖T恤男2018新款男装圆领纯色莫代尔黑色男士短袖T恤衫半袖上衣打底衫浅绿色','冬季','T恤衫',199.00,'商家承诺:按时发货按时送达','芙蕖','芙蕖新品短袖T恤男2018新款男装圆领纯色莫代尔黑色男士短袖T恤衫半袖上衣打底衫浅绿色','0.6kg','中国大陆',189218,1,1,0,1,1);
INSERT INTO bobo_clothing VALUES(17,7,'柏奈熙新品短袖T恤男2018新款男装圆领纯色莫代尔黑色男士短袖T恤衫半袖上衣打底衫浅绿色','春季','T恤衫',19.00,'商家承诺:按时发货按时送达','柏奈熙','柏奈熙新品短袖T恤男2018新款男装圆领纯色莫代尔黑色男士短袖T恤衫半袖上衣打底衫浅绿色','0.3kg','中国大陆',189248,1,1,0,1,1);
INSERT INTO bobo_clothing VALUES(18,7,'柏奈熙新品短袖T恤男2018新款男装圆领纯色莫代尔黑色男士短袖T恤衫半袖上衣打底衫浅绿色','春季','T恤衫',909.00,'商家承诺:按时发货按时送达','博耐洗','博耐洗新品短袖T恤男2018新款男装圆领纯色莫代尔黑色男士短袖T恤衫半袖上衣打底衫浅绿色','0.8kg','中国大陆',182278,0,0,1,1,1);


/**衣服库存表**/
CREATE TABLE bobo_clothing_inventory(
  iid INT PRIMARY KEY AUTO_INCREMENT,
  cid_id INT,
  clothing_spec VARCHAR (64),
  clothing_color VARCHAR (8),
  inventory INT,
  FOREIGN KEY(cid_id)REFERENCES bobo_clothing(cid)
);
INSERT INTO bobo_clothing_inventory VALUES(1,1,'s','黑色',960);
INSERT INTO bobo_clothing_inventory VALUES(2,1,'x','黑色',908);
INSERT INTO bobo_clothing_inventory VALUES(3,1,'XL','黑色',980);
INSERT INTO bobo_clothing_inventory VALUES(4,1,'XXL','黑色',960);
INSERT INTO bobo_clothing_inventory VALUES(5,1,'XXXL','黑色',940);
INSERT INTO bobo_clothing_inventory VALUES(6,1,'xs','黑色',920);
INSERT INTO bobo_clothing_inventory VALUES(7,2,'xs','黑色',930);
INSERT INTO bobo_clothing_inventory VALUES(8,2,'s','黑色',950);
INSERT INTO bobo_clothing_inventory VALUES(9,2,'m','黑色',908);
INSERT INTO bobo_clothing_inventory VALUES(10,2,'L','黑色',900);
INSERT INTO bobo_clothing_inventory VALUES(11,2,'XXL','白色',907);
INSERT INTO bobo_clothing_inventory VALUES(12,2,'XXL','月兰色',905);
INSERT INTO bobo_clothing_inventory VALUES(13,3,'XXL','橘红色',905);
INSERT INTO bobo_clothing_inventory VALUES(14,3,'XXL','黑蓝色',904);
INSERT INTO bobo_clothing_inventory VALUES(15,3,'XS','黑色',904);
INSERT INTO bobo_clothing_inventory VALUES(16,3,'L','黑色',930);
INSERT INTO bobo_clothing_inventory VALUES(17,3,'XL','黑色',290);
INSERT INTO bobo_clothing_inventory VALUES(18,4,'XL','黑蓝色',920);
INSERT INTO bobo_clothing_inventory VALUES(19,4,'XXL','黑色',930);
INSERT INTO bobo_clothing_inventory VALUES(20,4,'XXXL','黑色',490);
INSERT INTO bobo_clothing_inventory VALUES(21,4,'XL','黑色',905);
INSERT INTO bobo_clothing_inventory VALUES(22,4,'m','黑色',950);
INSERT INTO bobo_clothing_inventory VALUES(23,5,'s','黑色',905);

/**衣服种类表**/
CREATE TABLE bobo_clothing_family(
  fid INT PRIMARY KEY AUTO_INCREMENT,
  fname varchar(32) DEFAULT NULL
);

INSERT INTO bobo_clothing_family VALUES(1,'七匹狼');
INSERT INTO bobo_clothing_family VALUES(2,'尤兰亚');
INSERT INTO bobo_clothing_family VALUES(3,'淑芝');
INSERT INTO bobo_clothing_family VALUES(4,'古伊芙');
INSERT INTO bobo_clothing_family VALUES(5,'随意百顺');
INSERT INTO bobo_clothing_family VALUES(6,'芙蕖');
INSERT INTO bobo_clothing_family VALUES(7,'柏奈熙');


/**衣服图片**/
CREATE TABLE bobo_clothing_pic(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  cid_pid INT,              #衣服编号
  sm VARCHAR(128),            #小图片路径
  md VARCHAR(128),            #中图片路径
  lg VARCHAR(128),             #大图片路径
  spec VARCHAR(128),            #规格
  FOREIGN KEY (cid_pid) REFERENCES bobo_clothing(cid)
);

INSERT INTO bobo_clothing_pic VALUES(1,1,'img/pro-imgs/sm/cid=1-1.jpg','img/pro-imgs/md/cid=1-1.jpg','img/pro-imgs/details/cid1-6-1.jpg','img/pro-imgs/spec/cid=2.jpg');
INSERT INTO bobo_clothing_pic VALUES(2,1,'img/pro-imgs/sm/cid=1-2.jpg','img/pro-imgs/md/cid=1-2.jpg','img/pro-imgs/details/cid1-6-2.jpg','img/pro-imgs/spec/cid=3.jpg');
INSERT INTO bobo_clothing_pic VALUES(3,1,'img/pro-imgs/sm/cid=1-3.jpg','img/pro-imgs/md/cid=1-3.jpg','img/pro-imgs/details/cid1-6-3.jpg','img/pro-imgs/spec/cid=3.jpg');
INSERT INTO bobo_clothing_pic VALUES(4,1,'img/pro-imgs/sm/cid=1-4.jpg','img/pro-imgs/md/cid=1-4.jpg','img/pro-imgs/details/cid1-6-4.jpg','img/pro-imgs/spec/cid=3.jpg');
INSERT INTO bobo_clothing_pic VALUES(5,1,'img/pro-imgs/sm/cid=1-5.jpg','img/pro-imgs/md/cid=1-5.jpg','img/pro-imgs/details/cid1-6-5.jpg','img/pro-imgs/spec/cid=3.jpg');
INSERT INTO bobo_clothing_pic VALUES(6,1,'img/pro-imgs/sm/cid=1-6.jpg','img/pro-imgs/md/cid=1-6.jpg','img/pro-imgs/details/cid1-6-6.jpg','img/pro-imgs/spec/cid=3.jpg');
INSERT INTO bobo_clothing_pic VALUES(7,2,'img/pro-imgs/sm/cid=7-1.jpg','img/pro-imgs/md/cid=7-1.jpg','img/pro-imgs/details/cid7-8-1.jpg','img/pro-imgs/spec/cid=7.jpg');
INSERT INTO bobo_clothing_pic VALUES(8,2,'img/pro-imgs/sm/cid=7-2.jpg','img/pro-imgs/md/cid=7-2.jpg','img/pro-imgs/details/cid7-8-2.jpg','img/pro-imgs/spec/cid=8.jpg');
INSERT INTO bobo_clothing_pic VALUES(9,2,'img/pro-imgs/sm/cid=7-3.jpg','img/pro-imgs/md/cid=7-3.jpg','img/pro-imgs/details/cid7-8-3.jpg','img/pro-imgs/spec/cid=8.jpg');
INSERT INTO bobo_clothing_pic VALUES(10,2,'img/pro-imgs/sm/cid=7-4.jpg','img/pro-imgs/md/cid=7-4.jpg','img/pro-imgs/details/cid7-8-4.jpg','img/pro-imgs/spec/cid=8.jpg');
INSERT INTO bobo_clothing_pic VALUES(11,2,'img/pro-imgs/sm/cid=7-5.jpg','img/pro-imgs/md/cid=7-5.jpg','img/pro-imgs/details/cid7-8-5.jpg','img/pro-imgs/spec/cid=8.jpg');
INSERT INTO bobo_clothing_pic VALUES(12,2,'img/pro-imgs/sm/cid=7-6.jpg','img/pro-imgs/md/cid=7-6.jpg','img/pro-imgs/details/cid7-8-6.jpg','img/pro-imgs/spec/cid=8.jpg');
INSERT INTO bobo_clothing_pic VALUES(13,3,'img/pro-imgs/sm/cid=9-1.jpg','img/pro-imgs/md/cid=9-1.jpg','img/pro-imgs/details/cid9-10-1.jpg','img/pro-imgs/spec/cid=9.jpg');
INSERT INTO bobo_clothing_pic VALUES(14,3,'img/pro-imgs/sm/cid=9-2.jpg','img/pro-imgs/md/cid=9-2.jpg','img/pro-imgs/details/cid9-10-2.jpg','img/pro-imgs/spec/cid=9.jpg');
INSERT INTO bobo_clothing_pic VALUES(15,3,'img/pro-imgs/sm/cid=9-3.jpg','img/pro-imgs/md/cid=9-3.jpg','img/pro-imgs/details/cid9-10-3.jpg','img/pro-imgs/spec/cid=9.jpg');
INSERT INTO bobo_clothing_pic VALUES(16,3,'img/pro-imgs/sm/cid=9-4.jpg','img/pro-imgs/md/cid=9-4.jpg','img/pro-imgs/details/cid9-10-4.jpg','img/pro-imgs/spec/cid=9.jpg');
INSERT INTO bobo_clothing_pic VALUES(17,3,'img/pro-imgs/sm/cid=9-5.jpg','img/pro-imgs/md/cid=9-5.jpg','img/pro-imgs/details/cid9-10-5.jpg','img/pro-imgs/spec/cid=9.jpg');


INSERT INTO bobo_clothing_pic VALUES(19,4,'img/pro-imgs/sm/cid=4-1.jpg','img/pro-imgs/md/cid=4-1.jpg','img/pro-imgs/details/cid1-4-1.jpg','img/pro-imgs/spec/cid=3.jpg');
INSERT INTO bobo_clothing_pic VALUES(20,4,'img/pro-imgs/sm/cid=4-2.jpg','img/pro-imgs/md/cid=4-2.jpg','img/pro-imgs/details/cid1-4-2.jpg','img/pro-imgs/spec/cid=3.jpg');
INSERT INTO bobo_clothing_pic VALUES(21,4,'img/pro-imgs/sm/cid=4-3.jpg','img/pro-imgs/md/cid=4-3.jpg','img/pro-imgs/details/cid1-4-3.jpg','img/pro-imgs/spec/cid=3.jpg');
INSERT INTO bobo_clothing_pic VALUES(22,4,'img/pro-imgs/sm/cid=4-4.jpg','img/pro-imgs/md/cid=4-4.jpg','img/pro-imgs/details/cid1-4-4.jpg','img/pro-imgs/spec/cid=3.jpg');
INSERT INTO bobo_clothing_pic VALUES(23,4,'img/pro-imgs/sm/cid=4-5.jpg','img/pro-imgs/md/cid=4-5.jpg','img/pro-imgs/details/cid1-4-5.jpg','img/pro-imgs/spec/cid=3.jpg');
INSERT INTO bobo_clothing_pic VALUES(24,4,'img/pro-imgs/sm/cid=4-6.jpg','img/pro-imgs/md/cid=4-6.jpg','img/pro-imgs/details/cid1-4-6.jpg','img/pro-imgs/spec/cid=3.jpg');
INSERT INTO bobo_clothing_pic VALUES(25,5,'img/pro-imgs/sm/cid=5-1.jpg','img/pro-imgs/md/cid=5-1.jpg','img/pro-imgs/details/cid1-5-1.jpg','img/pro-imgs/spec/cid=3.jpg');
INSERT INTO bobo_clothing_pic VALUES(26,5,'img/pro-imgs/sm/cid=5-2.jpg','img/pro-imgs/md/cid=5-2.jpg','img/pro-imgs/details/cid1-5-2.jpg','img/pro-imgs/spec/cid=3.jpg');
INSERT INTO bobo_clothing_pic VALUES(27,5,'img/pro-imgs/sm/cid=5-3.jpg','img/pro-imgs/md/cid=5-3.jpg','img/pro-imgs/details/cid1-5-3.jpg','img/pro-imgs/spec/cid=3.jpg');
INSERT INTO bobo_clothing_pic VALUES(28,5,'img/pro-imgs/sm/cid=5-4.jpg','img/pro-imgs/md/cid=5-4.jpg','img/pro-imgs/details/cid1-5-4.jpg','img/pro-imgs/spec/cid=3.jpg');
INSERT INTO bobo_clothing_pic VALUES(29,5,'img/pro-imgs/sm/cid=5-5.jpg','img/pro-imgs/md/cid=5-5.jpg','img/pro-imgs/details/cid1-5-5.jpg','img/pro-imgs/spec/cid=3.jpg');
INSERT INTO bobo_clothing_pic VALUES(30,5,'img/pro-imgs/sm/cid=5-6.jpg','img/pro-imgs/md/cid=5-6.jpg','img/pro-imgs/details/cid1-5-6.jpg','img/pro-imgs/spec/cid=3.jpg');
INSERT INTO bobo_clothing_pic VALUES(31,6,'img/pro-imgs/sm/cid=6-1.jpg','img/pro-imgs/md/cid=6-1.jpg','img/pro-imgs/details/cid1-6-1.jpg','img/pro-imgs/spec/cid=3.jpg');
INSERT INTO bobo_clothing_pic VALUES(32,6,'img/pro-imgs/sm/cid=6-2.jpg','img/pro-imgs/md/cid=6-2.jpg','img/pro-imgs/details/cid1-6-2.jpg','img/pro-imgs/spec/cid=3.jpg');
INSERT INTO bobo_clothing_pic VALUES(33,6,'img/pro-imgs/sm/cid=6-3.jpg','img/pro-imgs/md/cid=6-3.jpg','img/pro-imgs/details/cid1-6-3.jpg','img/pro-imgs/spec/cid=3.jpg');
INSERT INTO bobo_clothing_pic VALUES(34,6,'img/pro-imgs/sm/cid=6-4.jpg','img/pro-imgs/md/cid=6-4.jpg','img/pro-imgs/details/cid1-6-4.jpg','img/pro-imgs/spec/cid=3.jpg');
INSERT INTO bobo_clothing_pic VALUES(35,6,'img/pro-imgs/sm/cid=6-5.jpg','img/pro-imgs/md/cid=6-5.jpg','img/pro-imgs/details/cid1-6-5.jpg','img/pro-imgs/spec/cid=3.jpg');
INSERT INTO bobo_clothing_pic VALUES(36,6,'img/pro-imgs/sm/cid=6-6.jpg','img/pro-imgs/md/cid=6-6.jpg','img/pro-imgs/details/cid1-6-6.jpg','img/pro-imgs/spec/cid=3.jpg');
INSERT INTO bobo_clothing_pic VALUES(37,7,'img/pro-imgs/sm/cid=7-1.jpg','img/pro-imgs/md/cid=7-1.jpg','img/pro-imgs/details/cid1-7-1.jpg','img/pro-imgs/spec/cid=3.jpg');
INSERT INTO bobo_clothing_pic VALUES(38,7,'img/pro-imgs/sm/cid=7-2.jpg','img/pro-imgs/md/cid=7-2.jpg','img/pro-imgs/details/cid1-7-2.jpg','img/pro-imgs/spec/cid=3.jpg');
INSERT INTO bobo_clothing_pic VALUES(39,7,'img/pro-imgs/sm/cid=7-3.jpg','img/pro-imgs/md/cid=7-3.jpg','img/pro-imgs/details/cid1-7-3.jpg','img/pro-imgs/spec/cid=3.jpg');
INSERT INTO bobo_clothing_pic VALUES(40,7,'img/pro-imgs/sm/cid=7-4.jpg','img/pro-imgs/md/cid=7-4.jpg','img/pro-imgs/details/cid1-7-4.jpg','img/pro-imgs/spec/cid=3.jpg');
INSERT INTO bobo_clothing_pic VALUES(41,7,'img/pro-imgs/sm/cid=7-5.jpg','img/pro-imgs/md/cid=7-5.jpg','img/pro-imgs/details/cid1-7-5.jpg','img/pro-imgs/spec/cid=3.jpg');
INSERT INTO bobo_clothing_pic VALUES(42,7,'img/pro-imgs/sm/cid=7-6.jpg','img/pro-imgs/md/cid=7-6.jpg','img/pro-imgs/details/cid1-7-6.jpg','img/pro-imgs/spec/cid=3.jpg');
/**用户信息**/
CREATE TABLE bobo_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  email VARCHAR(64),
  phone VARCHAR(16),
  avatar VARCHAR(128),        #头像图片路径
  user_name VARCHAR(32),      #用户名，如王小明
  gender INT                  #性别  0-女  1-男
);

INSERT INTO bobo_user VALUES
(NULL, 'dingding', '123456', 'ding@qq.com', '13501234567', 'img/avatar/default.png', '丁伟', '1'),
(NULL, 'dangdang', '123456', 'dang@qq.com', '13501234568', 'img/avatar/default.png', '林当', '1'),
(NULL, 'doudou', '123456', 'dou@qq.com', '13501234569', 'img/avatar/default.png', '窦志强', '1'),
(NULL, 'yaya', '123456', 'ya@qq.com', '13501234560', 'img/avatar/default.png', '秦小雅', '0');
/**收货地址信息**/
CREATE TABLE bobo_receiver_address(
  aid INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,                #用户编号
  receiver VARCHAR(16),       #接收人姓名
  fixedphone VARCHAR(16),     #固定电话
  province VARCHAR(16),       #省
  city VARCHAR(16),           #市
  county VARCHAR(16),         #县
  address VARCHAR(128),       #详细地址
  cellphone VARCHAR(16),      #手机
  postcode CHAR(6),           #邮编
  tag VARCHAR(16),            #标签名
  is_default BOOLEAN,          #是否为当前用户的默认收货地址
  FOREIGN KEY (user_id) REFERENCES bobo_user(uid)
);

/**用户购物车表**/
CREATE TABLE bobo_shopping_cart(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,      #用户编号
  product_id INT,   #商品编号
  count INT,        #购买数量
  is_checked BOOLEAN, #是否已勾选，确定购买
  FOREIGN KEY (user_id) REFERENCES bobo_user(uid),
  FOREIGN KEY (product_id) REFERENCES bobo_clothing(cid)
);

/**用户订单**/
CREATE TABLE bobo_order(
  oid INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,
  address_id INT,
  status INT,             #订单状态  1-等待付款  2-等待发货  3-运输中  4-已签收  5-已取消
  order_time BIGINT,      #下单时间
  pay_time BIGINT,        #付款时间
  deliver_time BIGINT,    #发货时间
  received_time BIGINT,    #签收时间
  payment_method VARCHAR(8),   #付款方式
  is_freight_insurance BOOLEAN,  #是否购买运费险
  FOREIGN KEY (user_id) REFERENCES bobo_user(uid),
  FOREIGN KEY (address_id) REFERENCES bobo_receiver_address(aid)
);

/**用户订单详情**/
CREATE TABLE xz_order_detail(
  did INT PRIMARY KEY AUTO_INCREMENT,
  order_id INT,           #订单编号
  product_id INT,         #产品编号
  count INT,               #购买数量
  FOREIGN KEY (order_id) REFERENCES bobo_order(oid),
  FOREIGN KEY (product_id) REFERENCES bobo_clothing(cid)
);

/****首页轮播广告商品****/
CREATE TABLE bobo_index_carousel(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  img VARCHAR(128),
  title VARCHAR(64),
  href VARCHAR(128)
);

INSERT INTO bobo_index_carousel VALUES(1,'/img/slider_img1.jpg','非凡质感,轻拥一季舒适','product_details.html?lid=1');
INSERT INTO bobo_index_carousel VALUES(2,'/img/slider_img2.jpg','个性T-Shirt,释放自我,展现青春','product_details.html?lid=2');
INSERT INTO bobo_index_carousel VALUES(3,'/img/slider_img3.jpg','春装新品上市,春意更盎然','product_details.html?lid=3');
INSERT INTO bobo_index_carousel VALUES(4,'/img/slider_img4.jpg','春装新品上市,春意更盎然','product_details.html?lid=4');
INSERT INTO bobo_index_carousel VALUES(5,'/img/slider_img5.jpg','时尚达人,做自己更有品味','product_details.html?lid=5');
/****首页商品****/
CREATE TABLE bobo_index_product(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64),
  details VARCHAR(128),
  pic VARCHAR(128),
  price DECIMAL(6,2),
  href VARCHAR(128),
  seq_recommended TINYINT,
  seq_new_arrival TINYINT,
  seq_top_sale TINYINT
);

INSERT INTO bobo_index_product VALUES(null,'七匹狼新品短袖T恤男2018新款男装圆领纯色莫代尔黑色男士短袖T恤衫半袖上衣打底衫浅绿色','七匹狼','img/cid=1-1.jpg',129.00,'product_details.html?lid=1',1,1,1);
INSERT INTO bobo_index_product VALUES(null,'尤兰亚新品短袖T恤男2018新款男装圆领纯色莫代尔黑色男士短袖T恤衫半袖上衣打底衫浅绿色','尤兰亚','img/cid=7-1.jpg',156.00,'product_details.html?lid=2',2,2,2);
INSERT INTO bobo_index_product VALUES(null,'淑芝新品短袖T恤男2018新款男装圆领纯色莫代尔黑色男士短袖T恤衫半袖上衣打底衫浅绿色','淑芝','img/cid=9-1.jpg',167.00,'product_details.html?lid=3',3,3,3);
-- INSERT INTO bobo_index_product VALUES(null,'古伊芙新品短袖T恤男2018新款男装圆领纯色莫代尔黑色男士短袖T恤衫半袖上衣打底衫浅绿色','古伊芙','img/cid=4-1.jpg',134.00,'product_details.html?lid=4',4,4,4);
-- INSERT INTO bobo_index_product VALUES(null,'随意百顺新品短袖T恤男2018新款男装圆领纯色莫代尔黑色男士短袖T恤衫半袖上衣打底衫浅绿色','随意佰顺','img/cid=5-1.jpg',167.00,'product_details.html?lid=5',5,5,5);
-- INSERT INTO bobo_index_product VALUES(null,'柏奈熙新品短袖T恤男2018新款男装圆领纯色莫代尔黑色男士短袖T恤衫半袖上衣打底衫浅绿色','柏奈熙','img/cid=7-1.jpg',456.00,'product_details.html?lid=6',6,6,6);

/******女装*******/

CREATE TABLE bobo_index_product_girl(
  gid INT PRIMARY KEY AUTO_INCREMENT,
  details VARCHAR(128),
  pic VARCHAR(128),
  href VARCHAR(128)
);

INSERT INTO bobo_index_product_girl VALUES(null,'淑芝 连衣裙2018春夏季新款韩版女装两件套棉麻连衣裙','img/cid=11-1.jpg','product_details.html?lid=4');
INSERT INTO bobo_index_product_girl VALUES(null,'夏季连衣裙2018女士春夏装新款韩版修身女装时尚打底','img/cid=13-1.jpg','product_details.html?lid=5');
INSERT INTO bobo_index_product_girl VALUES(null,'芙蕖 雪纺衫女2018夏装新款韩版雪纺衬衫女圆领修身','img/cid=15-1.jpg','product_details.html?lid=6');
INSERT INTO bobo_index_product_girl VALUES(null,'尤兰亚 2018夏季新款短袖印花雪纺衫女蕾丝拼接花边','img/cid=17-1.jpg','product_details.html?lid=7');