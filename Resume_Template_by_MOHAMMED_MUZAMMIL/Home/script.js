// JavaScript code
window.addEventListener("scroll", function () {
  var navdiv = document.querySelector(".navdiv");
  var logodiv = document.querySelector(".logodiv");
  var navcomponentsUl = document.querySelector(".navcomponents ul");
  var signdiv = document.querySelector(".signdiv");
  var scrollY = window.scrollY;
  var scrollThreshold = 10;

  if (scrollY > scrollThreshold) {
    logodiv.classList.add("fixed");
    navcomponentsUl.classList.add("fixed");
    signdiv.classList.add("fixed");
  } else {
    logodiv.classList.remove("fixed");
    navcomponentsUl.classList.remove("fixed");
    signdiv.classList.remove("fixed");
  }
});
