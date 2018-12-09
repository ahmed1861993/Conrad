
   $(function(){
   $('.first').click(function(){
       $('.one').show();
       $('.two').hide();
   });
    
    $('.second').click(function(){
       $('.two').show();
       $('.one').hide();
   });

    
    $(window).scroll(function(){
        var scroll = $(this).scrollTop();
        if(scroll > 400){
            $('.head').slideDown(600);
            
        }else{
             $('.head').slideUp(600);
        }
    });
    
   $(".fancybox").fancybox();
       
     
       $('div.accordion h3').click(function(){
           $(this).next().slideToggle(400);
          $('div.accordion p').not ($(this).next()).slideUp();
       });
       
       
       $('.download').click(function(){
           
           
       $('.timer').countTo();
           });
       
             
       
       $("html").niceScroll({
           cursorcolor:"#ad885b",
           cursorwidth:"10px",
           cursorborder: "1px solid #555"
       });
       
       
       $('header li a').click(function(){
           $('html,body').animate({
               scrollTop: $('#' + $(this).data('value')).offset().top
           },1500)
       });
       
//       $('.all-images').mixItUp();
       
       
       
});

 