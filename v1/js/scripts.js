$(document).ready(function(){
  // Reserve Form Tool Tip
  $('[data-toggle="tooltip"]').tooltip();

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

  // Login Modal Close Buttons / Toggle
  $("#loginBtn").click(function(){
    $("#loginModal").modal({hide: false});
  });
  $("#loginClose").click(function(){
    $("#loginModal").modal({hide: true});
  });

  // Reserve Table Modal
  $("#reserveBtn").click(function(){
    $("#reserveform").modal({hide: false});
  });
  $("#reserveClose").click(function(){
    $("#reserveform").modal({hide: true});
  });

});
