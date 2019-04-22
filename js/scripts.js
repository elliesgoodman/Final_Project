$(document).ready(function(){
    $('input[type="checkbox"]').click(function(){
        var inputValue = $(this).attr("value");
        $("." + inputValue).toggle();
    });
});


$(window).scroll(scrollFunction);

function scrollFunction(){
  if ($(window).scrollTop() > 600){
    $("#go-top-button").fadeIn();
  } else {
    $("#go-top-button").fadeOut();
  }
};

function topFunction() {
  $("html, body").animate({ scrollTop:
  0});
}

$(window).scroll(scrollFunction2);

function scrollFunction2(){
  if ($(window).scrollTop() > 150){
    $(".sidenav").fadeIn();
  } else {
    $(".sidenav").fadeOut();
  }
};
