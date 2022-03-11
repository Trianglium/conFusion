// Reserve Form Tool Tip
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});


// Carousel play/pause button
$("#carouselButton").click(function(){
    if ($("#carouselButton").children("span").hasClass('fa-pause')) {
        $("#mycarousel").carousel('pause');
        $("#carouselButton").children("span").removeClass('fa-pause');
        $("#carouselButton").children("span").addClass('fa-play');
    }
    else if ($("#carouselButton").children("span").hasClass('fa-play')){
        $("#mycarousel").carousel('cycle');
        $("#carouselButton").children("span").removeClass('fa-play');
        $("#carouselButton").children("span").addClass('fa-pause');
    }
});

// Login Modal JS
$(document).ready(function(){
    $("#loginBtn").click(function(){
      $("#loginModal").modal({show: true});
    });
    $("#loginClose").click(function(){
      $("#loginModal").modal({show: false});
    });
});

// Reserve Table Modal JS
$(document).ready(function(){
    $("#reserveBtn").click(function(){
      $("#reserveform").modal({show: true});
    });
    $("#reserveClose").click(function(){
      $("#reserveform").modal({show: false});
    });
});
