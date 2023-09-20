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




  // $(window).scroll(function(){
  //   let main_about = $('#about').offset().top;
  //   let main_work = $('#work').offset().top;
  //   let main_con = $('#contact').offset().top;

  //   let scrollTop = $(this).scrollTop();

  //   if(scrollTop >= main_about && scrollTop < main_work){
  //     $('.btn_work .btn_contact').removeClass('active');
  //     $('.btn_about').addClass('active');
  //   }else if(scrollTop >= main_work && scrollTop < main_con){
  //     $('.btn_contact .btn_about').removeClass('active');
  //     $('.btn_work').addClass('active');
  //   }else if(scrollTop >= main_con){
  //     $('.btn_work .btn_about').removeClass('active');
  //     $('.btn_contact').addClass('active');
    
  //   }else{
  //     $('.btn_work .btn_about .btn_contact').removeClass('active');
  //   }

  // });

  $(window).scroll(function(){
    let sPos = $(this).scrollTop();
    console.log(sPos);


    if(sPos>=900 && sPos<1800){
      $('.btn_about').fadeIn(100).css({'position':'fixed','z-index':'14'});
    }else{
      $('.btn_about').hide(100);
    }



  });
});
