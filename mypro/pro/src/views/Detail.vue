<template>
  <div class="about">
    <my-header></my-header>
    <div class="container">
      <!-- 页头导航栏 -->
      <ul class="breadcrumb bg-transparent pl-0">
        <li class="breadcrumb-item">
          <a href="javascript:;" class="text_small text-muted">服装</a>
        </li>
        <li class="breadcrumb-item">
          <a href="javascript:;" class="text_small text-muted">{{product.hot_sale}}</a>
        </li>
        <li class="breadcrumb-item">
          <a href="javascript:;" class="text_small text-muted">{{product.brand}}</a>
        </li>
        <li class="breadcrumb-item">
          <a href="javascript:;" class="text_small text-muted">{{product.bname}}</a>
        </li>
      </ul>
      <div class="row">
        <!-- 图片展示区域 -->
        <div class="col-sm-12 col-md-4 col-lg-4">
          <a href="#">
            <img class="pb-4 w-100" :src='pics[1].md' id="img_md"/>
          </a>
          <div class="d-flex justify-content-between mt-2 bg-light w-100" id="img_sm">
            <a href="#" v-for="(p,i) of pics" :key="i" @mouseenter="choose(i+1)">
              <img :src="p.sm" id='sm'/>
            </a>
          </div>
        </div>

        <!-- 商品详情区域 -->
        <div class="col-sm-12 col-md-5 col-lg-5">
          <div class="d-flex flex-column">
            <p class="font-weight-bold h6">{{product.brand}}</p>
            <div class="jumbotron my_bg p-2 mb-2">
              <div class="d-flex">
                <p class="text_small text-muted mt-1">售价：</p>
                <span class="h6 text-danger">￥{{product.price.toFixed(2)}}</span>
              </div>
              <p class="text_big text-muted">{{product.promise}}</p>
            </div>
            <div>
              <span class="text-muted h6">客服：</span>
              <span class="h6 text-muted p-0">联系客服</span>
              <img class="mb-2" src="img/kefuf.gif" />
            </div>
            <p class="w-40 text-muted h6">颜色:</p>

            <div class="my-2" id="color" v-if="colors">

            </div>

            <p class="w-40 text-muted h6 mr-3">尺码:</p>
            <div class="d-flex my-1">
              <a
                href="javasrcipt:;"
                class="d-block border border-dark text_small text-muted p-1 mx-1"
                v-for="(s,i) of colors"
                :key="i"
              >{{s.clothing_spec}}</a>
            </div>
            <div class="d-flex justify-content-start mt-2">
              <span class="text-muted h6">数量：</span>
              <button class="mx-1 px-2">-</button>
              <input type="text" value="1" class="w-25 my_input" />
              <button class="my_btn1 mx-1 px-2">+</button>
            </div>
            <div class="d-flex justify-content-start mt-3">
              <a class="btn btn-light px-2 py-2 my_bg1 mr-2 text-danger" href="#">立即购买</a>
              <a class="btn bg-danger px-1 mr-2 text-white" href="#">
                <img src="img/cart.png" />
                <span>加入购物车</span>
              </a>
              <a class="btn btn-danger d-flex flex-column p-1" href="#">
                <img class="w-50 h-50 ml-1" src="img/store_f.png" />
                <span class="text-white text_big">收藏</span>
              </a>
            </div>
          </div>
        </div>

        <!-- 猜你喜欢 -->
        <div class="col-sm-12 col-md-3 col-lg-3">
          <div class="row no-gutters">

            <div class="col-sm-12 col-md-6">
              <div class="d-flex flex-column border border-dark p-1 rounded text-center m-1">
                <p class="text_small my-2">——··猜你喜欢··——</p>
                <a href="javascript::" class="text-center">
                  <img src="img/cid=9-1.jpg" class="w-100" />
                  <span class="border border-dark rounded-circle d-inline-block p-3 mt-2"></span>
                </a>
              </div>
            </div>

            <div class="col-sm-12 col-md-6">
              <div class="d-flex flex-column border border-dark p-1 rounded text-center m-1">
                <p class="text_small my-2">——··猜你喜欢··——</p>
                <a href="javascript::" class="text-center">
                  <img src="img/cid=9-1.jpg" class="w-100" />
                  <span class="border border-dark rounded-circle d-inline-block p-3 mt-2"></span>
                </a>
              </div>
            </div>
            <div class="col-sm-12 col-md-6">
              <div class="d-flex flex-column border border-dark p-1 rounded text-center m-1">
                <p class="text_small my-2">——··猜你喜欢··——</p>
                <a href="javascript::" class="text-center">
                  <img src="img/cid=9-1.jpg" class="w-100" />
                  <span class="border border-dark rounded-circle d-inline-block p-3 mt-2"></span>
                </a>
              </div>
            </div>
            <div class="col-sm-12 col-md-6">
              <div class="d-flex flex-column border border-dark p-1 rounded text-center m-1">
                <p class="text_small my-2">——··猜你喜欢··——</p>
                <a href="javascript::" class="text-center">
                  <img src="img/cid=9-1.jpg" class="w-100" />
                  <span class="border border-dark rounded-circle d-inline-block p-3 mt-2"></span>
                </a>
              </div>
            </div>
          </div>
        </div>


      </div>
      <div class="text-center">
        <span class="h5 text-danger">-----为你推荐-----</span>
      </div>
      <div class="transition border border-light">
        <div class="transition1">
          <div class="text-center">
            <a href="#">
              <img src="img/cid=11-1.jpg" />
              <p class="text_small1 font-weight-bold text-muted">戴尔 DELL燃7000 R1605S 超霸</p>
            </a>
          </div>
          <div class="text-center">
            <a href="#">
              <img src="img/cid=9-1.jpg" />
              <p class="text_small1 font-weight-bold text-muted">戴尔 DELL燃7000 R1605S 超霸</p>
            </a>
          </div>
          <div class="text-center">
            <a href="#">
              <img src="img/cid=9-1.jpg" />
              <p class="text_small1 font-weight-bold text-muted">戴尔 DELL燃7000 R1605S 超霸</p>
            </a>
          </div>
          <div class="text-center">
            <a href="#">
              <img src="img/cid=9-1.jpg" />
              <p class="text_small1 font-weight-bold text-muted">戴尔 DELL燃7000 R1605S 超霸</p>
            </a>
          </div>
          <div class="text-center">
            <a href="#">
              <img src="img/cid=9-1.jpg" />
              <p class="text_small1 font-weight-bold text-muted">戴尔 DELL燃7000 R1605S 超霸</p>
            </a>
          </div>
          <div class="text-center">
            <a href="#">
              <img src="img/cid=9-1.jpg" />
              <p class="text_small1 font-weight-bold text-muted">戴尔 DELL燃7000 R1605S 超霸</p>
            </a>
          </div>
          <div class="text-center">
            <a href="#">
              <img src="img/cid=9-1.jpg" />
              <p class="text_small1 font-weight-bold text-muted">戴尔 DELL燃7000 R1605S 超霸</p>
            </a>
          </div>
          <div class="text-center">
            <a href="#">
              <img src="img/cid=9-1.jpg" />
              <p class="text_small1 font-weight-bold text-muted">戴尔 DELL燃7000 R1605S 超霸</p>
            </a>
          </div>
          <div class="text-center">
            <a href="#">
              <img src="img/cid=2-1.jpg" />
              <p class="text_small1 font-weight-bold text-muted">戴尔 DELL燃7000 R1605S 超霸</p>
            </a>
          </div>
          <div class="text-center">
            <a href="#">
              <img src="img/cid=9-1.jpg" />
              <p class="text_small1 font-weight-bold text-muted">戴尔 DELL燃7000 R1605S 超霸</p>
            </a>
          </div>
        </div>
      </div>
      <ul class="my_bg p-2 d-flex">
        <li>
          <a href="javascript:;" class="h6 text-dark font-weight-bold">商品详情</a>
        </li>
        <li class="ml-3">
          <a href="javascript:;" class="h6 text-dark font-weight-bold">商品评价</a>
        </li>
      </ul>
      <div class="row no-gutters">
        <div class="col-8">
          <div class="my-2">
            <img src="img/product_detail_icon_1.png" alt class="mb-2" />
            <span class="h5 font-weight-bold ml-2">规格参数</span>
          </div>
          <p
            class="text_small font-weight-bold subject"
          >商品名称：芙蕖 雪纺衫女2018夏装新款韩版雪纺衬衫女圆领修身碎花露肩上衣女@ 蓝碎花 M</p>
          <div class="d-flex justify-content-between">
            <span class="subject text_small">品牌：芙蕖</span>
            <span class="subject text_small">商品毛重：500.00g</span>
            <span class="subject text_small">商品产地：中国大陆</span>
          </div>
          <div class="mt-4">
            <img src="img/product_detail_icon_3 (1).png" alt class="mb-2" />
            <span class="h5 font-weight-bold ml-2">商品介绍</span>
          </div>
          <!-- 大图介绍 -->
          <div v-for="(d,i) of pics" :key="i">
            <img :src="d.lg" alt />
          </div>

          <div class="my-4">
            <img src="img/product_detail_icon_3.png" alt class="mb-2" />
            <span class="h5 font-weight-bold ml-2">售后保障</span>
          </div>
          <div>
            <img src="img/product_detail_img16.png" alt class="mb-2" />
            <span class="h6 font-weight-bold ml-2 text-primary">正品保障</span>
          </div>
          <p class="text_small">
            波波试衣间平台卖家销售并发货的商品，由平台卖家提供发票和相应的售后服务。请您放心购买！
            注：因厂家会在没有任何提前通知的情况下更改产品包装、产地或者一些附件，本司不能确保客户收到的货物与商城图片、产地、附件说明完全一致。只能确保为原厂正货！并且保证与当时市场上同样主流新品一致。若没有及时更新，请大家谅解！
          </p>
          <div>
            <img src="img/product_detail_img16.png" alt class="mb-2" />
            <span class="h6 font-weight-bold ml-2 text-primary">全国联保</span>
          </div>
          <p class="text_small">
            凭质保证书及波波试衣间发票，可享受全国联保服务，与您亲临商场选购的商品享受相同的质量保证。波波试衣间还为您提供具有竞争力的商品价格和运费政策，请您放心购买！
            注：因厂家会在没有任何提前通知的情况下更改产品包装、产地或者一些附件，本司不能确保客户收到的货物与商城图片、产地、附件说明完全一致。只能确保为原厂正货！并且保证与当时市场上同样主流新品一致。若本商城没有及时更新，请大家谅解！
          </p>
          <div class="my-4">
            <img src="img/product_detail_icon_2.png" alt class="mb-2" />
            <span class="h5 font-weight-bold ml-2">权利声明</span>
          </div>
          <p class="text_small">
            1号店上的所有商品信息、客户评价、商品咨询、网友讨论等内容，是1号店重要的经营资源，未经许可，禁止非法转载使用。
            注：本站商品信息均来自于合作方，其真实性、准确性和合法性由信息拥有者（合作方）负责。本站不提供任何保证，并不承担任何法律责任。
          </p>
        </div>
        <div class="col-4"></div>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>


<style scoped>
.breadcrumb .breadcrumb-item + .breadcrumb-item:before {
  content: ">";
  padding: 0;
}

.my_bg {
  background-color: #fdd;
}
.transition {
  overflow: hidden;
}
.transition1 {
  display: flex;
}
.transition1 {
  animation: imgMove 10s linear infinite alternate;
}
.transition1 > div > a > img {
  width: 250px;
  padding: 3px;
  border-radius: 5px;
}
.transition > div:hover {
  animation-play-state: paused;
}
@keyframes imgMove {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-900px);
  }
}
#img_sm>a{
  border:1px solid #fff;
}
#img_sm>a:hover{ 
  border:1px solid #f00;
}

  

</style>




<script>
export default {
  data() {
    return {
      product: { price: 0 },
      pics: [],
      colors: [],
      lid:1
    };
  },
  created() {
    this.lid = this.$route.params.lid;
  },
  methods: {
    choose(a){
      let imgEle=document.getElementById('img_md');
      let smEle=document.getElementById('sm');
      
      let num=smEle.src.split('=')[1].substr(0,1);
      imgEle.src='img/pro-imgs/md/cid='+num+'-'+a+'.jpg';
      
    },
 

  },
  mounted() {
    this.axios
      .get("/details/detail", { params: { lid: this.lid } })
      .then((result) => {
        console.log(result.data);
        let { product, pics, specs, colors } = result.data;
        this.product = product;
        this.pics = pics;
        this.colors = colors;
        for (var i = 0; i <colors.length; i++) {
          if (i == colors.length-1) {
            let colorEle = document.getElementById("color");
            let html = `<a class="border border-dark py-1 pb-2 pr-2 mx-2" href="javascript:;">
                   <span class="text_small text-muted">${colors[i].clothing_color}</span>
                </a>`;
            colorEle.innerHTML += html;
            continue;
          }
          for (var j = i +1; j < colors.length; j++) {
            if (colors[i].clothing_color == colors[j].clothing_color) {break}
            else if(j==colors.length-1){
              let colorEle = document.getElementById("color");
              let html = `<a class="border border-dark py-1 pb-2 pr-2 mx-2" href="javascript:;">
                   <span class="text_small text-muted">${colors[i].clothing_color}</span>
                </a>`;
              colorEle.innerHTML += html;
            };
          }
        }
      });
  },
};
</script>

