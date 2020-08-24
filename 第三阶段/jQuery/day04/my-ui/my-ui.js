jQuery.fn.myAccordion=function(){
  //this指将来的.前的$("#my-accordion"):
  var $parent=this;
  //1.自动侵入class
  //为当前插件HTML的父元素添加class为accordion
  $parent.addClass("accordion")
  //为所有父元素的奇数位置的子元素添加class为title
  .children(":nth-child(odd)").addClass("title")
  //为所有奇数位置的子元素的下一个兄弟添加class为content fade
  .next().addClass("content fade")
  //为所有偶数位置的子元素的第一个元素添加class为in
  .first().addClass("in");
  //2.将已经实现插件效果的事件代码复制到结尾
  $(".accordion").on("click",".title",e=>
      $(e.target).next(".content").toggleClass("in")
        .siblings(".content").removeClass("in")
    );
}