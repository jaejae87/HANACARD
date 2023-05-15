
// event_box2 slider
$('.eb_slider_list').slick({
  arrows:false,
  dots:true,
  autoplay:true,
  pauseOnHover:false,
});
// �ъ깮/�뺤�踰꾪듉
$('.event_box2 .page_act .btn_stop').click(function(e){
  e.preventDefault();
  if($('.event_box2 .page_act').hasClass("on")){
      $('.event_box2 .page_act').removeClass("on");
      $('.eb_slider_list').slick('slickPause');
  }
})

$('.event_box2 .page_act .btn_play').click(function(e){
  e.preventDefault();
  $('.event_box2 .page_act').addClass("on");
  $('.eb_slider_list').slick('slickPlay');
})

let card =$('.card');
card.slick({
  arrows:false,
  dots:true,
  autoplay:true,
  pauseOnHover:false,
});

$('.event_box3 .pagn_act .btn_stop').click(function(e){
  e.preventDefault();
  if($('.event_box3 .pagn_act').hasClass("on")){
      $('.event_box3 .pagn_act').removeClass("on")
      card.slick('slickPause');
  }

})

$('.event_box3 .pagn_act .btn_play').click(function(e){
  e.preventDefault();
  $('.event_box3 .pagn_act').addClass("on")
  card.slick('slickPlay');
})

// life 踰꾪듉
let tab=$('.life_menu ul li');
let menu=$('.life_style li');

tab.mouseover(function(){
  //�쒖깮�곸쑝濡� �쒖뼱�좊븣 媛�吏꾧퀬 �섏삩 踰덊샇瑜� 異붿텧-->index()
  let target = $(this);
  let index = target.index();
  console.log(index)
  menu.css({opacity:0})
  menu.eq(index).css({opacity:1})
});