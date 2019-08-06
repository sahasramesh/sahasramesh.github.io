jQuery(function($) {
  <script>document.body.className += ' fade-out';</script>
  $('.pane').each(function(key, value) {
    $(value).data("getHeight", $(value).height());
  });

  $(function() {
    $('body').removeClass('fade-out');
  });
  $(".handle").css("opacity", 0.5);
  $(".pane").css({
    "height": "0",
    "overflow": "hidden"
  });

  $(".handle").toggle(function() {
      $(this).css("opacity", 1.0)
      $(this).next(".pane").animate({
        height: $(this).next(".pane").data("getHeight")
      }, 500);
      return false
    },
    function() {
      $(this).css("opacity", 0.5)
      $(this).next(".pane").animate({
        height: 0
      }, 500);
      return false
    });

});
