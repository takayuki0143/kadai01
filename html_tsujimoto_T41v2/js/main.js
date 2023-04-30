// jsを記述する際はここに記載していく
// const sound = document.querySelector('#sound');
// $("#power").on("click",function(){
//     sound.play();
// });

const sounds = document.querySelector('#sounds');
$("#macho").on("click",function(){
    sounds.play();
});
$("#onigiri").on("click",function(){
    sounds.play();
});
$("#nouka").on("click",function(){
    sounds.play();
});

const soun = document.querySelector('#soun');
$("#cake").on("click",function(){
    soun.play();
});
$("#cak").on("click",function(){
    soun.play();
});
$("#ca").on("click",function(){
    soun.play();
});

const sound = document.querySelector('#sound');
$("#powe").on("click",function(){
    sound.play();
});
$("#powers").on("click",function(){
    sound.play();
});
$("#powerz").on("click",function(){
    sound.play();
});

const sou = document.querySelector('#sou');
$("#gyuunyuu").on("click",function(){
    sou.play();
});
$("#gyuu").on("click",function(){
    sou.play();
});
$("#gyu").on("click",function(){
    sou.play();
});






const www = document.querySelector('#www');
$("#twiteet").on("click",function(){
    www.play();
});







//フェードイン
$(function () {
    $(window).scroll(function () {
      const windowHeight = $(window).height();
      const scroll = $(window).scrollTop();
  
      $('.nature').each(function () {
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 100) {
          $(this).addClass("is-fadein");
        }
      });

      $('.school').each(function () {
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 100) {
          $(this).addClass("is-fadein");
        }
      });

      $('.taste').each(function () {
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 100) {
          $(this).addClass("is-fadein");
        }
      });
    });
  });

$("#pizza").on("click",function(){
    $(".news-text").slideUp(1000);
    $(".news-text").slideDown(1000);
});

$("#konbini").on("click",function(){
    $(".news-texts").slideUp(1000);
    $(".news-texts").slideDown(1000);
});

$("#protein").on("click",function(){
    $(".news-textz").slideUp(1000);
    $(".news-textz").slideDown(1000);
});


// 改造

let n = 0;
$("#takayuki").on("click",function(){
    n++;

    //1回クリックしたら花柄
    if(n >= 1 && n < 3){
        $("#body").css("background-image","url(https://thumb.ac-illust.com/91/91fcc3c3790d8e61a97d9493dc60b954_t.jpeg)");
        // alert("ok");
    }
    //2回クリックしたらチェンジ
    if(n >= 3 && n < 5){
        $("#body").css("background-image","url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRP5tYJ8JGw4xrGNzzgpLeZuVIQyPuieSTNQ&usqp=CAU)");
        // alert("OK");
        $("#body").css("color","orange");
    }
    
    //5回クリックしたらチェンジ
    if(n == 5){
        $("#body").css("background-image","url(https://thumb.photo-ac.com/44/44805c7121c3fee3fb807193f15c04dd_t.jpeg)");
        $("#body").css("color","red");
        $("#takayuki").attr("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCW1fDI8scVwYFgi1Tn7XeyhKguCYhc9zF3A&usqp=CAU");
        $("img").css("filter", "grayscale(100%)");
        //5回クリックしたら自己紹介文もヘンテコなものになっているようにしたい→HTML部分を改変する
       
    }
});

