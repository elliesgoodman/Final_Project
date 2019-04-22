


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

// image source switch for artworks page

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

    filterSelection("all") // Execute the function and show all columns
    function filterSelection(c) {
      var x, i;
      x = document.getElementsByClassName("col-md-4");
      if (c == "all") c = "";
      // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
      for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
      }
    }

    // Show filtered elements
    function w3AddClass(element, name) {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
          element.className += " " + arr2[i];
        }
      }
    }

    // Hide elements that are not selected
    function w3RemoveClass(element, name) {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
          arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
      }
      element.className = arr1.join(" ");
    }

    // Add active class to the current button (highlight it)
    var btnContainer = document.getElementById("myBtnContainer");
    var btns = btnContainer.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }
