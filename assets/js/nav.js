$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
      $("nav").css("animation-name", "nav-change");
      $("nav").css("animation-duration", "0.3s");
      $("nav").css("animation-fill-mode", "forwards");
    } else {
      $("nav").css("animation-name", "nav-revert");
      $("nav").css("animation-duration", "0.3s");
      $("nav").css("animation-fill-mode", "forwards");
    }
  });
});
