// Generated by CoffeeScript 1.3.3
(function() {

  $(function() {
    var current;
    current = 'home';
    return $('.nav li a').click(function(evt) {
      var currentScroll, link, target;
      link = $(evt.target);
      if (target = link.data('target')) {
        evt.preventDefault();
        $('.nav li').removeClass('active');
        link.closest('li').addClass('active');
        if ($("#" + target).length > 0) {
          currentScroll = $('body').scrollTop();
          window.location.hash = target;
          $('html, body').scrollTop(currentScroll);
          return $('html, body').animate({
            scrollTop: $("#" + target).offset().top - 70
          }, 1000);
        } else {

        }
      }
    });
  });

}).call(this);
