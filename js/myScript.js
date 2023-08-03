$(function(){
    // 네비게이션 열고닫는 이벤트
    $('.btn-nav').click(function(){
      $('nav').css('display','block')
      $('.btn-nav').css('display','none')
      $('.btn-close').css('display','block')
    })
    // 네비게이션 닫는 이벤트
    $('.btn-close,nav li a').click(function(){
      $('nav').css('display','none')
      $('.btn-nav').css('display','block')
      $('.btn-close').css('display','none')
    })

    // 드로잉 팝업 이벤트
    $('.port-drawing .img-box').click(function(){
        console.log($(this).index());
        $('.popup li').css('display','none');
        $('.popup li').eq($(this).index()).css('display','flex');
    })
    
    // 드로잉 팝업 닫기 이벤트
    $('.btn-popup-close').click(function(){
        $('.popup li').css('display','none');
    })
    
    // 디자인 팝업 이벤트
    $('.port-design .img-box').click(function(){
        console.log($(this).index());
        $('.popup2 li').css('display','none');
        $('.popup2 li').eq($(this).index()).css('display','flex');
    })
    
    // 디자인 팝업 닫기 이벤트
    $('.popup-close2').click(function(){
        $('.popup2 li').css('display','none');
    })

    const swiper = new Swiper('.port-drawing',{
        // 기본
        slidesPerView:1.5,
        spaceBetween:30,
        breakpoints:{
            360:{
                slidesPerView:1.5,
                spaceBetween:30,
            },
            768:{
                slidesPerView:2.5,
                spaceBetween:25,
            },
            941:{
                slidesPerView:3.5,
                spaceBetween:30,
            },
            1200:{
                slidesPerView:4.5,
            },
        }
    });
    const swiper2 = new Swiper('.port-design',{
        // 기본
        slidesPerView:1.5,
        spaceBetween:30,
        breakpoints:{
            360:{
                slidesPerView:1.5,
                spaceBetween:30,
            },
            768:{
                slidesPerView:2.5,
                spaceBetween:25,
            },
            941:{
                slidesPerView:3.5,
                spaceBetween:30,
            },
            1200:{
                slidesPerView:4.5,
            },
        }
    });

    
    $('aside').hide();
    $(window).scroll(function(){
        if($(window).scrollTop()>500){
            $('aside').fadeIn(500);
        }else{
            $('aside').fadeOut(500);
        }
    })

    AOS.init();

})