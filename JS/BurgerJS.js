let checkwidth = true;

(function() {
window.onresize = displayWindowSize;
window.onload = displayWindowSize;

function displayWindowSize() {
    myWidth = window.innerWidth;
    myHeight = window.innerHeight;

    var navburger = document.getElementById("navigation");

    if(myWidth >= 1361) {
        classnavigation();
        checkwidth = false;
        navburger.style.display = "grid";
        document.getElementById("totop").style.display = "none";
    } else {
        if(myWidth <= 1360) {
            classnavigationabslt();
            checkwidth = true;
            navburger.style.display = "none";
            document.getElementById("totop").style.display = "block";
        }
    }
};
})();

function checkburger() {
    var checkburger = document.getElementById("burgercheck");
    var navburger = document.getElementById("navigation");
    if((checkwidth == true) && (checkburger.checked == true)) {
        navburger.style.display = "grid";
    } else {
        if((checkwidth == true) && (checkburger.checked == false)) {}
        navburger.style.display = "none";
    }
}

function classnavigation() {
    var navburger = document.getElementById("navigation");
    navburger.className = "navigation";
}
function classnavigationabslt() {
    var navburger = document.getElementById("navigation");
    navburger.className = "navigationabslt";
}