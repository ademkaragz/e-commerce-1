// Loader
$(document).ready(function () {
  $("#preloader").hide();
});

// Copyrigt Year
const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

// Carousel-offer
$(".left-offer").click(function () {
  var leftPos = $('.carousel-offer').scrollLeft();
  $(".carousel-offer").animate({ scrollLeft: leftPos - 300 }, 800);
});

$(".right-offer").click(function () {
  var leftPos = $('.carousel-offer').scrollLeft();
  $(".carousel-offer").animate({ scrollLeft: leftPos + 300 }, 800);
});


// Carousel-sale

// 1
$(".clothing-1-left").click(function () {
  var leftPos = $('.clothing-1').scrollLeft();
  $(".clothing-1").animate({ scrollLeft: leftPos - 300 }, 800);
});

$(".clothing-1-right").click(function () {
  var leftPos = $('.clothing-1').scrollLeft();
  $(".clothing-1").animate({ scrollLeft: leftPos + 300 }, 800);
});

// 2

$(".clothing-2-left").click(function () {
  var leftPos = $('.clothing-2').scrollLeft();
  $(".clothing-2").animate({ scrollLeft: leftPos - 300 }, 800);
});

$(".clothing-2-right").click(function () {
  var leftPos = $('.clothing-2').scrollLeft();
  $(".clothing-2").animate({ scrollLeft: leftPos + 300 }, 800);
});

// 3

$(".clothing-3-left").click(function () {
  var leftPos = $('.clothing-3').scrollLeft();
  $(".clothing-3").animate({ scrollLeft: leftPos - 300 }, 800);
});

$(".clothing-3-right").click(function () {
  var leftPos = $('.clothing-3').scrollLeft();
  $(".clothing-3").animate({ scrollLeft: leftPos + 300 }, 800);
});

//up button hide
    
$(window).scroll(function(){
  if ($(this).scrollTop() > 100)    // Sayfa ne kadar aşağı kayarsa buton görünsün. 100 sayısı = Kaydırma çubuğunun piksel konumu. Bu sayı değiştirilebilir.
      $("#up").fadeIn(400);    // Yukarı çık butonu ne kadar hızla ortaya çıksın. 400 milisaniye = 0,4 saniye. Bu sayı değiştirilebilir.
  else 
      $("#up").fadeOut(400);    // Yukarı çık butonu ne kadar hızla ortadan kaybolsun. 400 milisaniye = 0,4 saniye. Bu sayı değiştirilebilir.
});
