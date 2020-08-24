$('#btn').click(function(){
  let html=$('#box').is('.in') ? '展开筛选框' : '隐藏筛选框';
  $(this).html(html).next().toggleClass('in');
});
// $('#choose').children.forEach(element => {
//   console.log(element);
// });
console.log($('#choose').child);