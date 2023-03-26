let navbarDiv = document.getElementsByClassName("navbar")[0];
window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop) {
        navbarDiv.classList.add("navbar-cng");
    } else navbarDiv.classList.remove("navbar-cng");
});

// show navbar
let navbarCollapse = document.getElementById("navbar-collapse");
let navShowBtn = document.getElementById("navbar-show-btn");
let navCloseBtn = document.getElementById("navbar-close-btn");

navShowBtn.addEventListener("click", function () {
    navbarCollapse.classList.add("navbar-collapse-new");
});
navCloseBtn.addEventListener("click", function () {
    navbarCollapse.classList.remove("navbar-collapse-new");
});
// if someone press in any place the menu will be close
document.addEventListener("click", (e) => {
    if (
        e.target.id != "navbar-collapse" &&
        e.target.id != "navbar-show-btn" &&
        e.target.parentElement.id != "navbar-show-btn"
    ) {
        navbarCollapse.classList.remove("navbar-collapse-new");
    }
});
// stop animation and transaction in resize
let resizeTime;
window.addEventListener("resize", function () {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTime);
    resizeTime = setTimeout(function () {
        document.body.classList.remove("resize-animation-stopper");
    }, 400);
});

