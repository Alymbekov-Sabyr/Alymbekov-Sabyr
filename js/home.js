document.documentElement.style.setProperty(
    "--x",
    window.innerWidth * 0.49375 + "px"
 );
 document.documentElement.style.setProperty(
    "--y",
    window.innerWidth - 60 + "px"
 );
 document.documentElement.style.setProperty(
    "--w",
    948 * (190 / Math.round((((1600 * ((100 - 19.726) / 100)) * 79) / 107))) + "px"
 );
 var toggleButton = document.querySelector(".toggle-menu");
 var navBar = document.querySelector(".nav-bar");
 toggleButton.addEventListener("click", function () {
    navBar.classList.toggle("toggle");
    toggleButton.classList.toggle("tog");
 });