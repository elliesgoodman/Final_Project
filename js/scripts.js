// artworks page jquery. Not perfect as you have to select all to begin with rather than have all selected but works.

$(document).ready(function(){
    $('input[type="checkbox"]').click(function(){
        var inputValue = $(this).attr("value");
        $("." + inputValue).toggle();
    });
});

// backtotop button
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

// fade in checkboxes
$(window).scroll(scrollFunction2);

function scrollFunction2(){
  if ($(window).scrollTop() > 150){
    $(".sidenav").fadeIn();
  } else {
    $(".sidenav").fadeOut();
  }
};

// image source switch for artworks page to show a detail on hover

var sourceSwap = function () {
        var $this = $(this);
        var newSource = $this.data('alt-src');
        $this.data('alt-src', $this.attr('src'));
        $this.attr('src', newSource);
    }

    $(function() {
        $('img[data-alt-src]').each(function() {
            new Image().src = $(this).data('alt-src');
        }).hover(sourceSwap, sourceSwap);
    });
