$(document).ready(function() {
  $(window).scroll(function() {
    $('.c-fade__in').each(function() {
      var top_of_element = $(this).offset().top;
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > top_of_element) {
        $(this).css('opacity', '1');
      }
    });
  });
});
