$(function(){
  var lid=location.search.split("=")[1];
  if(lid===undefined){
    alert("请提供商品编号。即将返回首页");
    location.href="/index.html";
  }
  $.ajax({
    url:"http://localhost:5050/details",
    type:"get",
    data:{lid},//{lid:lid},
    dataType:"json",
    success:function(result){
      console.log(result);
      var {product, specs, pics}=result;
      //加载右上角商品的部分详细信息
      var {title, subtitle, price, promise}=product;
      $("#details>h6:first-child").html(title);
      $("#details>h6:nth-child(2)>a").html(subtitle);
      $("#details>div:nth-child(3)>div>h2").html(`¥${price.toFixed(2)}`);
      $("#details>div:nth-child(3)>div>span:last-child").html(promise);
      //加载规格参数列表: 
      var html=``;
      for(var sp of specs){
        html+=`<a class="btn btn-sm btn-outline-secondary ${lid==sp.lid?"active":""}" href="product_details.html?lid=${sp.lid}">s${sp.spec}</a>`
      }
      $("#details>div:nth-child(5)>div:nth-child(2)").html(html);
      //加载下方商品详细信息: 
      var {lname, os, memory, resolution, video_card, cpu, video_memory, category,disk}=product;
      $("#params>div>div:first-child>div:nth-child(3)").html(`<ul class="list-unstyled">
        <li class="float-left mb-2"><a class="text-muted small" href="#">商品名称：${lname}</a></li>
        <li class="float-left mb-2"><a class="text-muted small" href="#">系统：${os}</a></li>
        <li class="float-left mb-2"><a class="text-muted small" href="#">内存容量：${memory}</a></li>
        <li class="float-left mb-2"><a class="text-muted small" href="#">分辨率：${resolution}</a></li>
        <li class="float-left mb-2"><a class="text-muted small" href="#">显卡型号：${video_card}</a></li>
        <li class="float-left mb-2"><a class="text-muted small" href="#">处理器：${cpu}</a></li>
        <li class="float-left mb-2"><a class="text-muted small" href="#">显存容量：${video_memory}</a></li>
        <li class="float-left mb-2"><a class="text-muted small" href="#">分类：${category}</a></li>
        <li class="float-left mb-2"><a class="text-muted small" href="#">硬盘容量:${disk}</a></li>
      </ul>`);
      $("#params>div>div:first-child>div:nth-child(6)").html(product.details);

      //放大镜效果
      //加载下方小图片
      var $ulImgs=$("#preview>div>div:last-child ul");
      var html="";
      for(var p of pics){
        var {sm, md, lg}=p;
        html+=`<li class="float-left p-1">
          <img src="${sm}" data-md="${md}" data-lg="${lg}">
        </li>`;
      }
      $ulImgs.html(html).css("width",62*pics.length);
      //同时加载中图片和大图片
      var $mImg=$("#preview>div>img:first-child");
      $mImg.attr("src",pics[0].md);
      var $lgDiv=$("#div-lg");
      $lgDiv.css("background-image",`url(${pics[0].lg})`)
      //让小图片左右移动
      var times=0;
      var $btnLeft=$("#preview>div>div:last-child>img:first-child");
      var $btnRight=$("#preview>div>div:last-child>img:last-child");
      if(pics.length<=4){
        $btnRight.addClass("disabled");
      }
      $btnLeft.click(function(){
        if(times>0){
          times--;
          $ulImgs.css("margin-left",-62*times);
          $btnRight.removeClass("disabled");
          if(times==0){
            $btnLeft.addClass("disabled");
          }
        }
      });
      $btnRight.click(function(){
        if(times<pics.length-4){
          times++;
          $ulImgs.css("margin-left",-62*times);
          $btnLeft.removeClass("disabled");
          if(times==pics.length-4){
            $btnRight.addClass("disabled");
          }
        }
      })
      //鼠标进入小图片切换中图片和大图片
      $ulImgs.find("img").mouseover(function(){
        $mImg.attr("src",$(this).attr("data-md"))
      })
      //半透明遮罩层随鼠标移动: 
      var $sMask=$("#super-mask");
      var $mask=$("#mask");
      $sMask.mouseenter(function(){
        $mask.removeClass("d-none");
        $lgDiv.removeClass("d-none");
      }).mouseout(function(){
        $mask.addClass("d-none");
        $lgDiv.addClass("d-none");
      }).mousemove(function(e){
        var left=e.offsetX-88;
        var top=e.offsetY-88;
        if(left<0) left=0; else if(left>176) left=176;
        if(top<0) top=0; else if(top>176) top=176;
        $mask.css({
          left:left+"px",
          top:top+"px"
        });
        $lgDiv.css("background-position",`${-left*16/7}px ${-top*16/7}px`);
      })
    }
  })
})