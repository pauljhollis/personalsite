$( document ).ready(function() {
  $("#bannerText").fadeIn(2000);
  $(".showSites").click(function() {
    $('#bannerText').animate({'opacity' : 0 , 'marginTop': "-=500px"} , 750 , function(){
       $(this).fadeOut(0);
    });
   });
});
