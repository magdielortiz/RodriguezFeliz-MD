
$('.menu-toggle').on('click', function() {

  $('.menu').toggleClass('open')

  return false

})

$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 20) {
        $(".text-block").addClass("animation");
    }
});

$(".show-info").on("click", function() {
  $(this).next().slideToggle()

  return false
})
