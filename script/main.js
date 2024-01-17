$(document).ready(function(){

  const t_title = $('.name');
  const m_up = $('.up');

  m_up.animate({'top':'26%'},1000);

  let Timer = setTimeout(changeImg,400);
  function changeImg(){
    $('.up').attr('src','./images/up.png');
    $('.name').css('z-index','10');
  };

  // t_title.css({'left':'43%','top':'35%'});
  // t_title.css('transform', 'scaleY(1)');

  $('.name_l').delay(300).animate({'bottom':'180px','left':'0px'},700);
  $('.name_i').delay(300).animate({'bottom':'100px','left':'20px'},700);
  $('.name_m').delay(300).animate({'bottom':'28px','left':'60px'},700);
  $('.name_h').delay(300).animate({'bottom':'170px','left':'10px'},700);
  $('.name_y1').delay(300).animate({'bottom':'95px','left':'90px'},700);
  $('.name_e1').delay(300).animate({'bottom':'20px','left':'55px'},700);
  $('.name_y2').delay(300).animate({'bottom':'190px','right':'40px'},700);
  $('.name_e2').delay(300).animate({'bottom':'130px','left':'80px'},700);
  $('.name_o').delay(300).animate({'bottom':'80px','right':'10px'},700);
  $('.name_n').delay(300).animate({'bottom':'14px','left':'88px'},700);



  $(window).scroll(function(e){
    e.preventDefault;
    let sPos=Math.ceil((($(this).scrollTop()/$(this).height())*100));
    console.log(sPos);



    if(sPos>=93 && sPos<=174){
      $('.btn_work, .btn_contact').fadeOut();
      $('.btn_about').fadeIn();

    }else if(sPos>=176 && sPos<=428){
      $('.btn_about, .btn_contact').fadeOut();
      $('.btn_work').fadeIn();

    }else if(sPos>=430){
    $('.btn_work, .btn_about').fadeOut();
    $('.btn_contact').fadeIn();
    }else{
      $('.btn').fadeOut();
    }
  });


$('.style').click(function(){
  swal("공사중!","불편을 드려 죄송합니다","error");
  return false;
});



});

