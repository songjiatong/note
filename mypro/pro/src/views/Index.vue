<template>
  <div>
    <my-header></my-header>
    <div class="container" id="container">
      <ul class="menu row my-3">
        <li class="col">
          全部合集
          <ul>
            <li>情侣套装</li>
            <li>连衣裙</li>
            <li>雪纺</li>
            <li>短袖</li>
            <li>体恤</li>
            <li>风衣</li>
            <li>七分裤</li>
            <li>破洞裤</li>
            <li>短外套</li>
            <li>九分裤</li>
            <li>哈伦裤</li>
            <li>背带裤</li>
          </ul>
        </li>
        <li class="col">
          女士上衣
          <ul>
            <li>短外套</li>
            <li>短袖</li>
            <li>体恤</li>
            <li>打底衫</li>
            <li>卫衣</li>
            <li>条纹衬衫</li>
            <li>针织衣</li>
            <li>机车皮衣</li>
            <li>雪纺衬衣</li>
            <li>蕾丝上衣</li>
            <li>风衣</li>
          </ul>
        </li>
        <li class="col">
          女士裤子
          <ul>
            <li>牛仔裤</li>
            <li>阔腿裤</li>
            <li>九分裤</li>
            <li>哈伦裤</li>
            <li>破洞裤</li>
            <li>背带裤</li>
            <li>休闲裤</li>
            <li>连体裤</li>
            <li>工装裤</li>
            <li>短裤</li>
            <li>牛仔短裤</li>
          </ul>
        </li>
        <li class="col">
          型格男装
          <ul>
            <li>体恤</li>
            <li>衬衫</li>
            <li>潮男外套</li>
            <li>POLo衫</li>
            <li>飞行夹克</li>
            <li>卫衣</li>
            <li>马甲</li>
            <li>牛仔衣</li>
            <li>牛仔裤</li>
            <li>休闲裤</li>
          </ul>
        </li>
        <li class="col">
          时尚裙装
          <ul>
            <li>连衣裙</li>
            <li>短裙</li>
            <li>OL套装</li>
            <li>背带裤</li>
            <li>长裙</li>
            <li>旗袍婚纱</li>
            <li>百褶裙</li>
            <li>印花裙</li>
            <li>半身裙</li>
            <li>小礼裙</li>
            <li>牛仔裙</li>
          </ul>
        </li>
        <li class="col">
          个性女装
          <ul>
            <li>单鞋</li>
            <li>高跟鞋</li>
            <li>帆布鞋</li>
            <li>小白鞋</li>
            <li>休闲鞋</li>
            <li>豆豆鞋</li>
            <li>鱼嘴鞋</li>
            <li>马丁鞋</li>
            <li>人字拖</li>
            <li>凉鞋</li>
            <li>小猫跟</li>
          </ul>
        </li>
        <li class="col">
          品质男鞋
          <ul>
            <li>休闲鞋</li>
            <li>皮鞋</li>
            <li>运动鞋</li>
            <li>球鞋</li>
            <li>商务鞋马丁鞋</li>
            <li>帆布鞋</li>
            <li>乐福鞋</li>
            <li>高帮鞋</li>
            <li>内增高</li>
            <li>拖鞋</li>
            <li>凉鞋</li>
          </ul>
        </li>
      </ul>
      <carousel></carousel>
      
      <div class="my-3">
        <img src="img/index_logo.png" />
        <span class="text_big font-weight-bold">首页推荐/Index&nbsp;&nbsp;&nbsp;Recommend</span>
        <a href="javascript:;">
          <span class="border border-danger text-danger text_small p-1 offset-7">查看更多>></span>
        </a>
      </div>
      <div class="index row no-gutters">

        <div class="col-sm-12 col-md-3" v-for="(p,i) of product_index" :key="i">
          <div class="border border-danger mr-md-2 desc bg-white">
            <router-link :to="`/detail/${p.href.split('=')[1]}`">
              <img class="w-100" :src="p.pic"/>
            </router-link>
            <p class="text_small m-2">{{p.title}}</p>
            <p class="text-danger h6 m-2">¥{{p.price.toFixed(2)}}</p>
            <div class="text-center">
              <span class="h5 font-weight-bold text-danger">{{p.details}}</span>
              <span class="text-danger h5 font-weight-normal">¥{{p.price.toFixed(2)}}</span>
              <div class="py-1">
                <router-link :to="`/detail/${p.href.split('=')[1]}`" class="btn btn-sm text_small border border-danger text-danger">
                  查看详情
                </router-link>
                <router-link :to="p.href" class="btn btn-sm btn-danger py-1 text_small">加入收藏</router-link>
              </div>
            </div>
          </div>
        </div>

    
        <div class="col-sm-12 col-md-3">
          <div class="row no-gutters">

            <div class="col-6 border border-danger" v-for="(p,i) of product_index_girl" :key="i">
              <router-link :to="p.href">
                <img class="w-100" :src="p.pic" />
              </router-link>
              <p class="text_small1 m-0">{{p.details}}</p>
            </div>

            <!-- <div class="col-6 border border-danger">
              <a href="javascript:;">
                <img class="w-100" src="img/cid=13-1.jpg" />
              </a>
              <p class="text_small1 m-0">夏季连衣裙2018女士春夏装新款韩版修身女装时尚打底</p>
            </div>
            <div class="col-6 border border-danger">
              <a href="javascript:;">
                <img class="w-100" src="img/cid=15-1.jpg" />
              </a>
              <p class="text_small1 m-0">芙蕖 雪纺衫女2018夏装新款韩版雪纺衬衫女圆领修身</p>
            </div>
            <div class="col-6 border border-danger">
              <a href="javascript:;">
                <img class="w-100" src="img/cid=17-1.jpg" />
              </a>
              <p class="text_small1 m-0">尤兰亚 2018夏季新款短袖印花雪纺衫女蕾丝拼接花边</p>
            </div> -->
          </div>
        </div>
      </div>
      <div class="row no-gutters mt-3">
        <div class="col-md-4 col-sm-12">
          <div class="my_img">
            <div class="my_bottom text-center">
              <p class="text-danger text_big m-0">共享精选</p>
              <p class="text_small m-0">每日10:00更新</p>
              <a href="javascript:;" class="text_small text-muted">更多精选></a>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-12">
          <div class="ml-2">
            <hr class="m-0" />
            <p class="h6 bg-dark text-white pl-5 mx-5 mb-5">时尚男装</p>
            <div class="row fashion">
              <div class="col-6 mb-2">
                <a href="javajscript:;">
                  <p class="text_small text-muted m-0">七匹狼新品短袖T恤男2018新款衣服男装圆领纯色莫代尔黑色男士短袖体恤衫半袖</p>
                </a>
                <p class="m-0 text-danger text_small">￥129.00</p>
                <a href="javajscipt:;">
                  <img src="img/cid=7-1.jpg" class="w-100 ml-2" />
                </a>
              </div>
              <div class="col-6 mb-2">
                <a href="javajscript:;">
                  <p class="text_small text-muted m-0">鳄鱼恤CROCODILE短袖T恤男士夏季休闲衣服圆领潮流印花衣服打底T恤半袖男装</p>
                  <p class="m-0 text-danger text_small">￥29.00</p>
                </a>
                <a href="javascript:;">
                  <img src="img/cid=23-1.jpg" class="w-100 ml-2" />
                </a>
              </div>
              <div class="col-4 mt-2">
                <a href="javajscript:;">
                  <p class="text-muted text_small1 m-0">AMH男装韩版2018夏装潮流男装主流</p>
                  <p class="m-0 text-danger text_small">￥59.00</p>
                </a>
                <a href="javascript:;">
                  <img src="img/cid=2-1.jpg" class="w-100 ml-2" />
                </a>
              </div>
              <div class="col-4 mt-2">
                <a href="javascript:;">
                  <p class="text_small1 text-muted m-0">七匹狼新品短袖T恤男2018新款潮流短袖体</p>
                </a>
                <p class="m-0 text-danger text_small">￥189.00</p>
                <a href="javascript:;">
                  <img src="img/cid=8-1.jpg" class="w-100 ml-2" />
                </a>
              </div>
              <div class="col-4 mt-2">
                <a href="javajscript::">
                  <p class="text_small1 text-muted m-0">鳄鱼恤短袖T恤男士夏季休闲短袖衬衫潮流</p>
                </a>
                <p class="m-0 text-danger text_small">￥99.00</p>
                <a href="javascript:;">
                  <img src="img/cid=7-1.jpg" class="w-100 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-12">
          <div class="ml-4">
            <hr class="m-0" />
            <p class="h6 bg-danger text-white pl-4 mx-5 mb-5">个性女装</p>
            <div class="row fashion">
              <div class="col-6 mb-2">
                <a href="javajscript:;">
                  <p class="text_small text-muted m-0">古伊芙夏季连衣裙2018春夏装新款套装女士修身时尚女装性感打底假两件套套装</p>
                </a>
                <p class="m-0 text-danger text_small">￥129.00</p>
                <a href="javajscipt:;">
                  <img src="img/cid=9-1.jpg" class="w-100 ml-2" />
                </a>
              </div>
              <div class="col-6 mb-2">
                <a href="javajscript:;">
                  <p class="text_small text-muted m-0">夏季连衣裙2018女士春夏装新款韩版修身女装时尚打底假两件套套装女裙子棉麻</p>
                  <p class="m-0 text-danger text_small">￥29.00</p>
                </a>
                <a href="javascript:;">
                  <img src="img/cid=11-1.jpg" class="w-100 ml-2" />
                </a>
              </div>
              <div class="col-4 mt-3">
                <a href="javajscript:;">
                  <p class="text-muted text_small1 m-0">淑芝 连衣裙2018春夏季新款韩版女装</p>
                  <p class="m-0 text-danger text_small">￥59.00</p>
                </a>
                <a href="javascript:;">
                  <img src="img/cid=13-1.jpg" class="w-100 ml-2" />
                </a>
              </div>
              <div class="col-4 mt-3">
                <a href="javascript:;">
                  <p class="text_small1 text-muted m-0">尤兰亚 2018夏季新款短袖印花雪纺衫女蕾丝</p>
                </a>
                <p class="m-0 text-danger text_small">￥189.00</p>
                <a href="javascript:;">
                  <img src="img/cid=15-1.jpg" class="w-100 ml-2" />
                </a>
              </div>
              <div class="col-4 mt-3">
                <a href="javajscript::">
                  <p class="text_small1 text-muted m-0">芙蕖 雪纺衫女2018夏装新款韩版雪纺衬衫</p>
                </a>
                <p class="m-0 text-danger text_small">￥99.00</p>
                <a href="javascript:;">
                  <img src="img/cid=17-1.jpg" class="w-100 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="my-3">
        <img src="img/index_logo.png" />
        <span class="text_big font-weight-bold">最新上架/New Shelf</span>
        <a href="javascript:;">
          <span class="border border-danger text-danger text_small p-1 offset-8">查看更多>></span>
        </a>
      </div>
      <div class="row">
        <div class="col-md col-sm-12 shelf_hover">
          <img src="img/cid=2-1.jpg" class="w-100" />
          <p class="text_small m-0">七匹狼新品短袖T恤男2018新款衣服男装圆领纯色莫代尔黑色男士短袖体恤衫半袖上衣打底衫灰蓝色</p>
          <p class="text-danger text_big m-0 font-weight-bold">￥169.00</p>
          <p class="text_small m-0">666人购买&nbsp;&nbsp;&nbsp;999个好评</p>
          <div>
            <a class="pt-5 d-block" href="javascript:;">
              <img src="img/large.png" />
            </a>
            <p>
              <a href="javascript:;" class="btn btn-danger mt-2 text_small">查看详情</a>
            </p>
            <p class="pb-5">
              <a href="javascript:;" class="btn btn-danger mt-2 text_small">加入收藏</a>
            </p>
          </div>
        </div>
        <div class="col-md col-sm-12 shelf_hover">
          <img src="img/cid=8-1.jpg" class="w-100" />
          <p class="text_small m-0">鳄鱼恤（CROCODILE）短袖T恤男士夏季休闲衣服圆领潮流印花衣服打底T恤半袖男装猛男套装玛丽莲梦露</p>
          <p class="text-danger text_big m-0 font-weight-bold">￥999.99</p>
          <p class="text_small m-0">666人购买&nbsp;&nbsp;&nbsp;999个好评</p>
          <div>
            <a class="pt-5 d-block" href="javascript:;">
              <img src="img/large.png" />
            </a>
            <p>
              <a href="javascript:;" class="btn btn-danger mt-2 text_small">查看详情</a>
            </p>
            <p class="pb-5">
              <a href="javascript:;" class="btn btn-danger mt-2 text_small">加入收藏</a>
            </p>
          </div>
        </div>
        <div class="col-md col-sm-12 shelf_hover">
          <img src="img/cid=3-1.jpg" class="w-100" />
          <p class="text_small m-0">七匹狼新品短袖T恤男2018新款衣服男装圆领纯色莫代尔黑色男士短袖体恤衫半袖上衣打底衫藏青色</p>
          <p class="text-danger text_big m-0 font-weight-bold">￥89.00</p>
          <p class="text_small m-0">666人购买&nbsp;&nbsp;&nbsp;999个好评</p>
          <div>
            <a class="pt-5 d-block" href="javascript:;">
              <img src="img/large.png" />
            </a>
            <p>
              <a href="javascript:;" class="btn btn-danger mt-2 text_small">查看详情</a>
            </p>
            <p class="pb-5">
              <a href="javascript:;" class="btn btn-danger mt-2 text_small">加入收藏</a>
            </p>
          </div>
        </div>
        <div class="col-md col-sm-12 shelf_hover">
          <img src="img/cid=4-1.jpg" class="w-100" />
          <p class="text_small m-0">七匹狼新品短袖T恤男2018新款衣服男装圆领纯色莫代尔黑色男士短袖体恤衫半袖上衣打底衫军绿色</p>
          <p class="text-danger text_big m-0 font-weight-bold">￥79.00</p>
          <p class="text_small m-0">666人购买&nbsp;&nbsp;&nbsp;999个好评</p>
          <div>
            <a class="pt-5 d-block" href="javascript:;">
              <img src="img/large.png" />
            </a>
            <p>
              <a href="javascript:;" class="btn btn-danger mt-2 text_small">查看详情</a>
            </p>
            <p class="pb-5">
              <a href="javascript:;" class="btn btn-danger mt-2 text_small">加入收藏</a>
            </p>
          </div>
        </div>
        <div class="col-md col-sm-12 shelf_hover">
          <img src="img/cid=5-1.jpg" class="w-100" />
          <p class="text_small m-0">七匹狼新品短袖T恤男2018新款衣服男装圆领纯色莫代尔黑色男士短袖体恤衫半袖上衣打底衫白色衬衫</p>
          <p class="text-danger text_big m-0 font-weight-bold">￥99.00</p>
          <p class="text_small m-0">666人购买&nbsp;&nbsp;&nbsp;999个好评</p>
          <div>
            <a class="pt-5 d-block" href="javascript:;">
              <img src="img/large.png" />
            </a>
            <p>
              <a href="javascript:;" class="btn btn-danger mt-2 text_small">查看详情</a>
            </p>
            <p class="pb-5">
              <a href="javascript:;" class="btn btn-danger mt-2 text_small">加入收藏</a>
            </p>
          </div>
        </div>
      </div>
      <div class="row mt-2">
        <div class="col-md-6 col-sm-12">
          <div class="d-flex py-2">
            <img src="img/goods.png" class="w-25 d-inline-block" />
            <div class="d-flex offset-6">
              <img src="img/football.png" class="w-50 focus" />
              <div class="card border-0 animation bg-transparent h6">
                <span class="text-danger m-0">&lt;&lt;点球</span>
                <span class="text-danger m-0">&lt;&lt;就绪</span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-4 text-center">
              <img src="img/cid=35-1.jpg" class="w-100" />
              <p class="my-1 text_small">花花公子</p>
              <p class="text-primary text_small m-0">46人喜欢</p>
            </div>
            <div class="col-4 text-center">
              <img src="img/cid=34-1.jpg" class="w-100" />
              <p class="my-1 text_small">花花公子</p>
              <p class="text-primary text_small m-0">44人喜欢</p>
            </div>
            <div class="col-4 text-center">
              <img src="img/cid=33-1.jpg" class="w-100" />
              <p class="my-1 text_small">苹果休闲</p>
              <p class="text-primary text_small m-0">78人喜欢</p>
            </div>
            <div class="col-4 text-center">
              <img src="img/cid=31-1.jpg" class="w-100" />
              <p class="my-1 text_small">古卡顿&nbsp;男鞋真皮</p>
              <p class="text-primary text_small m-0">78人喜欢</p>
            </div>
            <div class="col-4 text-center">
              <img src="img/cid=32-1.jpg" class="w-100" />
              <p class="my-1 text_small">驰轩男鞋夏季新款</p>
              <p class="text-primary text_small m-0">78人喜欢</p>
            </div>
            <div class="col-4 text-center">
              <img src="img/cid=30-1.jpg" class="w-100" />
              <p class="my-1 text_small">休闲鞋男鞋2018春</p>
              <p class="text-primary text_small m-0">78人喜欢</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-sm-12">
          <div class="d-flex py-2">
            <img src="img/loves.png" class="w-25 d-inline-block" />
            <div class="d-flex offset-6">
              <img src="img/football.png" class="w-50 focus" />
              <div class="card border-0 animation bg-transparent h6">
                <span class="text-danger m-0">&lt;&lt;点球</span>
                <span class="text-danger m-0">&lt;&lt;就绪</span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-4 text-center">
              <img src="img/cid=29-1.jpg" class="w-100" />
              <p class="my-1 text_small">休闲鞋女夏季新款</p>
              <p class="text-danger text_small m-0">46人喜欢</p>
            </div>
            <div class="col-4 text-center">
              <img src="img/cid=28-1.jpg" class="w-100" />
              <p class="my-1 text_small">浩茗2018夏季鱼嘴</p>
              <p class="text-danger text_small m-0">44人喜欢</p>
            </div>
            <div class="col-4 text-center">
              <img src="img/cid=27-1.jpg" class="w-100" />
              <p class="my-1 text_small">帛屐2018新款罗马</p>
              <p class="text-danger text_small m-0">78人喜欢</p>
            </div>
            <div class="col-4 text-center">
              <img src="img/cid=26-1.jpg" class="w-100" />
              <p class="my-1 text_small">足迹&nbsp;缘凉鞋女夏季</p>
              <p class="text-danger text_small m-0">78人喜欢</p>
            </div>
            <div class="col-4 text-center">
              <img src="img/cid=25-1.jpg" class="w-100" />
              <p class="my-1 text_small">古卡顿 休闲鞋女真皮</p>
              <p class="text-danger text_small m-0">78人喜欢</p>
            </div>
            <div class="col-4 text-center">
              <img src="img/cid=24-1.jpg" class="w-100" />
              <p class="my-1 text_small">凉鞋女2018新品韩</p>
              <p class="text-danger text_small m-0">78人喜欢</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 热销单品 -->
      <div class="d-flex justify-content-between">
        <div class="my-3">
          <img src="img/selling.png" />
          <span class="text_big font-weight-bold">热销单品/Hot selling</span>
        </div>
        <ul class="d-flex my-3">
          <li>
            <a
              href="javascript:;"
              class="text-dark text_small py-1 px-3 border border-danger border-top-0 border-left-0 border-right-0 my_selling"
            >全部</a>
          </li>
          <li>
            <a
              href="javascript:;"
              class="text-dark text_small py-1 px-3 border border-danger border-top-0 border-left-0 border-right-0 my_selling"
            >上衣</a>
          </li>
          <li>
            <a
              href="javascript:;"
              class="text-dark text_small py-1 px-3 border border-danger border-top-0 border-left-0 border-right-0 my_selling"
            >裤子</a>
          </li>
          <li>
            <a
              href="javascript:;"
              class="text-dark text_small py-1 px-3 border border-danger border-top-0 border-left-0 border-right-0 my_selling"
            >裙子</a>
          </li>
          <li>
            <a
              href="javascript:;"
              class="text-danger text_small py-1 px-3 border border-danger"
            >查看更多>></a>
          </li>
        </ul>
      </div>
      <div class="row no-gutters">
        <div class="col-sm-12 col-md-2 hot_selling">
          <a href="javascript:;">
            <img src="img/cid=1-1.jpg" class="w-100" />
            <div>
              <p class="text_small1 mb-1 text-muted">七匹狼新品短袖T恤男2018新款衣服男装圆领纯色莫代尔黑色男士短袖</p>
              <p class="text-danger">￥129.00</p>
            </div>
          </a>
        </div>
        <div class="col-sm-12 col-md-2 hot_selling">
          <a href="javascript:;">
            <img src="img/cid=7-1.jpg" class="w-100" />
            <div>
              <p class="text_small1 mb-1 text-muted">七匹狼新品短袖T恤男2018新款衣服男装圆领纯色莫代尔黑色男士短袖</p>
              <p class="text-danger">￥129.00</p>
            </div>
          </a>
        </div>
        <div class="col-sm-12 col-md-2 hot_selling">
          <a href="javascript:;">
            <img src="img/cid=9-1.jpg" class="w-100" />
            <div>
              <p class="text_small1 mb-1 text-muted">七匹狼新品短袖T恤男2018新款衣服男装圆领纯色莫代尔黑色男士短袖</p>
              <p class="text-danger">￥129.00</p>
            </div>
          </a>
        </div>
        <div class="col-sm-12 col-md-2 hot_selling">
          <a href="javascript:;">
            <img src="img/cid=11-1.jpg" class="w-100" />
            <div>
              <p class="text_small1 mb-1 text-muted">七匹狼新品短袖T恤男2018新款衣服男装圆领纯色莫代尔黑色男士短袖</p>
              <p class="text-danger">￥129.00</p>
            </div>
          </a>
        </div>
        <div class="col-sm-12 col-md-2 hot_selling">
          <a href="javascript:;">
            <img src="img/cid=13-1.jpg" class="w-100" />
            <div>
              <p class="text_small1 mb-1 text-muted">七匹狼新品短袖T恤男2018新款衣服男装圆领纯色莫代尔黑色男士短袖</p>
              <p class="text-danger">￥129.00</p>
            </div>
          </a>
        </div>
        <div class="col-sm-12 col-md-2 hot_selling">
          <a href="javascript:;">
            <img src="img/cid=15-1.jpg" class="w-100" />
            <div>
              <p class="text_small1 mb-1 text-muted">七匹狼新品短袖T恤男2018新款衣服男装圆领纯色莫代尔黑色男士短袖</p>
              <p class="text-danger">￥129.00</p>
            </div>
          </a>
        </div>
      </div>
      <!-- 随便逛逛 -->
      <div class="my-3">
        <img src="img/others.png" />
        <span class="text_big font-weight-bold mr-5">随便逛逛/Look Others</span>
        <a href="javascript:;">
          <img src="img/change.png" />
          <span class="text-danger text_small p-1">换一换</span>
        </a>
      </div>
      <div class="row">
        <div class="col-md col-sm-12 shelf_hover">
          <img src="img/cid=2-1.jpg" class="w-100" />
          <p class="text_small m-0">七匹狼新品短袖T恤男2018新款衣服男装圆领纯色莫代尔黑色男士短袖体恤衫半袖上衣打底衫灰蓝色</p>
          <p class="text-danger text_big m-0 font-weight-bold">￥169.00</p>
          <p class="text_small m-0">666人购买&nbsp;&nbsp;&nbsp;999个好评</p>
          <div>
            <a class="pt-5 d-block" href="javascript:;">
              <img src="img/large.png" />
            </a>
            <p>
              <a href="javascript:;" class="btn btn-danger mt-2 text_small">查看详情</a>
            </p>
            <p class="pb-5">
              <a href="javascript:;" class="btn btn-danger mt-2 text_small">加入收藏</a>
            </p>
          </div>
        </div>
        <div class="col-md col-sm-12 shelf_hover">
          <img src="img/cid=8-1.jpg" class="w-100" />
          <p class="text_small m-0">鳄鱼恤（CROCODILE）短袖T恤男士夏季休闲衣服圆领潮流印花衣服打底T恤半袖男装猛男套装玛丽莲梦露</p>
          <p class="text-danger text_big m-0 font-weight-bold">￥999.99</p>
          <p class="text_small m-0">666人购买&nbsp;&nbsp;&nbsp;999个好评</p>
          <div>
            <a class="pt-5 d-block" href="javascript:;">
              <img src="img/large.png" />
            </a>
            <p>
              <a href="javascript:;" class="btn btn-danger mt-2 text_small">查看详情</a>
            </p>
            <p class="pb-5">
              <a href="javascript:;" class="btn btn-danger mt-2 text_small">加入收藏</a>
            </p>
          </div>
        </div>
        <div class="col-md col-sm-12 shelf_hover">
          <img src="img/cid=3-1.jpg" class="w-100" />
          <p class="text_small m-0">七匹狼新品短袖T恤男2018新款衣服男装圆领纯色莫代尔黑色男士短袖体恤衫半袖上衣打底衫藏青色</p>
          <p class="text-danger text_big m-0 font-weight-bold">￥89.00</p>
          <p class="text_small m-0">666人购买&nbsp;&nbsp;&nbsp;999个好评</p>
          <div>
            <a class="pt-5 d-block" href="javascript:;">
              <img src="img/large.png" />
            </a>
            <p>
              <a href="javascript:;" class="btn btn-danger mt-2 text_small">查看详情</a>
            </p>
            <p class="pb-5">
              <a href="javascript:;" class="btn btn-danger mt-2 text_small">加入收藏</a>
            </p>
          </div>
        </div>
        <div class="col-md col-sm-12 shelf_hover">
          <img src="img/cid=4-1.jpg" class="w-100" />
          <p class="text_small m-0">七匹狼新品短袖T恤男2018新款衣服男装圆领纯色莫代尔黑色男士短袖体恤衫半袖上衣打底衫军绿色</p>
          <p class="text-danger text_big m-0 font-weight-bold">￥79.00</p>
          <p class="text_small m-0">666人购买&nbsp;&nbsp;&nbsp;999个好评</p>
          <div>
            <a class="pt-5 d-block" href="javascript:;">
              <img src="img/large.png" />
            </a>
            <p>
              <a href="javascript:;" class="btn btn-danger mt-2 text_small">查看详情</a>
            </p>
            <p class="pb-5">
              <a href="javascript:;" class="btn btn-danger mt-2 text_small">加入收藏</a>
            </p>
          </div>
        </div>
        <div class="col-md col-sm-12 shelf_hover">
          <img src="img/cid=5-1.jpg" class="w-100" />
          <p class="text_small m-0">七匹狼新品短袖T恤男2018新款衣服男装圆领纯色莫代尔黑色男士短袖体恤衫半袖上衣打底衫白色衬衫</p>
          <p class="text-danger text_big m-0 font-weight-bold">￥99.00</p>
          <p class="text_small m-0">666人购买&nbsp;&nbsp;&nbsp;999个好评</p>
          <div>
            <a class="pt-5 d-block" href="javascript:;">
              <img src="img/large.png" />
            </a>
            <p>
              <a href="javascript:;" class="btn btn-danger mt-2 text_small">查看详情</a>
            </p>
            <p class="pb-5">
              <a href="javascript:;" class="btn btn-danger mt-2 text_small">加入收藏</a>
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md col-sm-12 shelf_hover">
          <img src="img/cid=2-1.jpg" class="w-100" />
          <p class="text_small m-0">七匹狼新品短袖T恤男2018新款衣服男装圆领纯色莫代尔黑色男士短袖体恤衫半袖上衣打底衫灰蓝色</p>
          <p class="text-danger text_big m-0 font-weight-bold">￥169.00</p>
          <p class="text_small m-0">666人购买&nbsp;&nbsp;&nbsp;999个好评</p>
          <div>
            <a class="pt-5 d-block" href="javascript:;">
              <img src="img/large.png" />
            </a>
            <p>
              <a href="javascript:;" class="btn btn-danger mt-2 text_small">查看详情</a>
            </p>
            <p class="pb-5">
              <a href="javascript:;" class="btn btn-danger mt-2 text_small">加入收藏</a>
            </p>
          </div>
        </div>
        <div class="col-md col-sm-12 shelf_hover">
          <img src="img/cid=8-1.jpg" class="w-100" />
          <p class="text_small m-0">鳄鱼恤（CROCODILE）短袖T恤男士夏季休闲衣服圆领潮流印花衣服打底T恤半袖男装猛男套装玛丽莲梦露</p>
          <p class="text-danger text_big m-0 font-weight-bold">￥999.99</p>
          <p class="text_small m-0">666人购买&nbsp;&nbsp;&nbsp;999个好评</p>
          <div>
            <a class="pt-5 d-block" href="javascript:;">
              <img src="img/large.png" />
            </a>
            <p>
              <a href="javascript:;" class="btn btn-danger mt-2 text_small">查看详情</a>
            </p>
            <p class="pb-5">
              <a href="javascript:;" class="btn btn-danger mt-2 text_small">加入收藏</a>
            </p>
          </div>
        </div>
        <div class="col-md col-sm-12 shelf_hover">
          <img src="img/cid=3-1.jpg" class="w-100" />
          <p class="text_small m-0">七匹狼新品短袖T恤男2018新款衣服男装圆领纯色莫代尔黑色男士短袖体恤衫半袖上衣打底衫藏青色</p>
          <p class="text-danger text_big m-0 font-weight-bold">￥89.00</p>
          <p class="text_small m-0">666人购买&nbsp;&nbsp;&nbsp;999个好评</p>
          <div>
            <a class="pt-5 d-block" href="javascript:;">
              <img src="img/large.png" />
            </a>
            <p>
              <a href="javascript:;" class="btn btn-danger mt-2 text_small">查看详情</a>
            </p>
            <p class="pb-5">
              <a href="javascript:;" class="btn btn-danger mt-2 text_small">加入收藏</a>
            </p>
          </div>
        </div>
        <div class="col-md col-sm-12 shelf_hover">
          <img src="img/cid=4-1.jpg" class="w-100" />
          <p class="text_small m-0">七匹狼新品短袖T恤男2018新款衣服男装圆领纯色莫代尔黑色男士短袖体恤衫半袖上衣打底衫军绿色</p>
          <p class="text-danger text_big m-0 font-weight-bold">￥79.00</p>
          <p class="text_small m-0">666人购买&nbsp;&nbsp;&nbsp;999个好评</p>
          <div>
            <a class="pt-5 d-block" href="javascript:;">
              <img src="img/large.png" />
            </a>
            <p>
              <a href="javascript:;" class="btn btn-danger mt-2 text_small">查看详情</a>
            </p>
            <p class="pb-5">
              <a href="javascript:;" class="btn btn-danger mt-2 text_small">加入收藏</a>
            </p>
          </div>
        </div>
        <div class="col-md col-sm-12 shelf_hover">
          <img src="img/cid=5-1.jpg" class="w-100" />
          <p class="text_small m-0">七匹狼新品短袖T恤男2018新款衣服男装圆领纯色莫代尔黑色男士短袖体恤衫半袖上衣打底衫白色衬衫</p>
          <p class="text-danger text_big m-0 font-weight-bold">￥99.00</p>
          <p class="text_small m-0">666人购买&nbsp;&nbsp;&nbsp;999个好评</p>
          <div>
            <a class="pt-5 d-block" href="javascript:;">
              <img src="img/large.png" />
            </a>
            <p>
              <a href="javascript:;" class="btn btn-danger mt-2 text_small">查看详情</a>
            </p>
            <p class="pb-5">
              <a href="javascript:;" class="btn btn-danger mt-2 text_small">加入收藏</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<style scoped>



.menu {
  margin: 0 auto;
}
.menu > li {
  float: left;
  color: #f00;
  margin-top: 10px;
  text-align: center;
  position: relative;
}
.menu > li ~ li {
  padding-left: 20px;
}
.menu > li > ul > li {
  font-size: 16px;
  color: #000;
  padding-top: 10px;
}
.menu > li > ul > li:hover {
  color: #f00;
}
.menu > li > ul {
  position: absolute;
  left: -30px;
  width: 0px;
  height: 0px;
  padding-left: 10px;
  background: linear-gradient(to bottom, #eedddd, #fff);
  opacity: 0;
  overflow: hidden;
  transition: left 0.7s linear, opacity 0.7s linear;
}
.menu > li:hover > ul {
  width: 130px;
  height: 420px;
  left: 6px;
  opacity: 1;
  z-index: 2;
}
.menu > li:hover {
  cursor: pointer;
}
/* .carousel-control-prev,
.carousel-control-next {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  top: 40%;
  background: #999;
}
.carousel-control-prev {
  left: 10px;
}
.carousel-control-next {
  right: 10px;
}
.carousel-indicators .active {
  background-color: #f00;
}
.carousel-indicators li {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #aaa;
  margin: 0 5px;
}
.carousel-item>a{
  position: relative;
}
.carousel_product{
  margin-left:100px;
  margin-top:200px;
  position:absolute;
  z-index: 999;
  color:#f00;
  font-size: 26px;
  font-weight: bolder;
  background-color: #aaa;
  opacity: .7;
  padding:2px 10px;
  border-radius: 5px;;
} */
.text_big {
  font-size: 20px;
}
.text_small {
  font-size: 14px;
}
.text_small1 {
  font-size: 10px;
}
.container > div > div > .desc {
  position: relative;
}
.container > div > div > .desc > div {
  width: 0;
  height: 0;
  overflow: hidden;
  bottom: -60px;
  left: 12px;
  background-color: #fff;
  transition: bottom 0.5s linear, transform 0.5s linear, transform 0.5s linear;
}
.container > div > div > .desc:hover > div {
  width: 91%;
  height: 93.5px;
  position: absolute;
  transform: scale(1.1);
  bottom: 5px;
}
.container > .index > div:not(:last-child) {
  transition: all 0.5s linear;
}
.container > .index > div:not(:last-child):hover {
  transform: scale(1.1);
}
.fashion > div > a > img {
  transition: all 0.3s linear;
}
.fashion > div > a > img:hover {
  transform: translateX(-9px);
}
.my_img {
  background-image: url(/img/0pro21.jpg);
  background-size: cover;
  height: 100%;
  position: relative;
}
.my_bottom {
  position: absolute;
  top: 390px;
  left: 104px;
  background-color: #fff;
  padding: 5px 25px 5px 25px;
}
.shelf_hover > div {
  text-align: center;
  opacity: 0.7;
  background-color: #aaa;
  position: relative;
  margin-top: -290px;
  width: 0;
  overflow: hidden;
  transition: width 0.5s linear;
}
.shelf_hover:hover > div {
  position: absolute;
  width: 87%;
}
.shelf_hover > div a {
  transition: all 0.3s linear;
  opacity: 0.7;
}
.shelf_hover > div a:hover {
  transform: scale(1.2);
  opacity: 1;
}
.animation {
  animation: shake 2.2s infinite;
}
@keyframes move {
  form {
    transform: translateX(0) rotateZ(0deg);
  }
  50% {
    transform: translateX(-100px) rotateZ(720deg);
  }
  to {
    transform: translateX(0) rotateZ(0deg);
  }
}
.focus:focus {
  animation: move 3s linear;
}
.my_selling:hover {
  background-color: #f00;
  border-radius: 5px;
}
.hot_selling {
  transition: transform 0.5s;
}
.hot_selling:hover {
  position: relative;
  transform: translate(0, -30px);
  border: 1px solid #f00;
  box-shadow: 0 0 10px 1px #f00;
  background-color: #fff;
}
.hot_selling > a > div {
  width: 0;
  height: 30px;
  overflow: hidden;
  transition: height 0.5s;
}
.hot_selling > a:hover > div {
  width: 100%;
  height: 90px;
}

</style>





<script>
import carousel from '../components/Carousel';
export default {
  data(){
    return{
      product_index:[],
      product_index_girl:[]
    }
  },


  mounted(){
    this.axios.get('/index/product_index').then(result=>{
      this.product_index=result.data;
    })
    this.axios.get('/index/product_index_girl').then(result=>{
      this.product_index_girl=result.data;
    })
  },
  components: { carousel }
}
</script>

