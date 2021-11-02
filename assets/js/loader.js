const preloader = document.querySelector(".preloader");
const fadeEffect = setInterval(() => {
  if (!preloader.style.opacity) {
    preloader.style.opacity = 1;
  }
  if (preloader.style.opacity > 0) {
    preloader.style.opacity -= 0.25;
  } else {
    clearInterval(fadeEffect);
    preloader.style.zIndex = -1;
  }
}, 75);
window.addEventListener("load", fadeEffect);
