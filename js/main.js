$(function(){

  setTimeout(function(){
    $('.mainTop__text p:nth-child(1)').removeClass("feedout");
  },1000);

  setTimeout(function(){
    $('.mainTop__text p:nth-child(2)').removeClass("feedout");
  },2000);

  setTimeout(function(){
    $('.mainTop__text p:nth-child(3)').removeClass("feedout");
  },3000);

  setTimeout(function(){
    $('.mainTop__text p:nth-child(4)').removeClass("feedout");
  },4000);

  setTimeout(function(){
    $('.mainTop__text p:nth-child(2)').addClass("text-shadow-effect");
    $('.mainTop__text p:nth-child(3)').addClass("text-shadow-effect");
  },5000);

  $("#mainMiddle__6__content--main1").hover(
    function () {
      $(this).addClass("main-cicle-hover-action1");
      $("#mainMiddle__6__content--main2").removeClass("main-cicle-hover-action1");
    },
    function () {
      $(this).removeClass("main-cicle-hover-action1");
      $("#mainMiddle__6__content--main2").addClass("main-cicle-hover-action1");
    }
  )

  var modal_open = $(".openModal");
  var modal_close = $(".closeModal");
  var item_number;

  $(modal_open).on('click',function(){
    item_number = $("." + ($(this).parent().attr("class").split(/\s+/)[1]) + "--modal");
    console.log(item_number)
    item_number.removeClass("display-none");
    
    setTimeout(function(){
      item_number.children(".itemsModal__content").addClass("modalContent-animetion");
    },500);
    return false;
  });
  $(modal_close).on('click',function(){
    item_number.addClass("display-none");
    item_number.children(".itemsModal__content").removeClass("modalContent-animetion");
    return false;
  });


})
