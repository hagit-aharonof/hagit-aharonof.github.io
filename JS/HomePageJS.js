// Scrool to Top Button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("totop").style.display = "block";
  } else {
    document.getElementById("totop").style.display = "none";
  }
}

function scrolltotop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}