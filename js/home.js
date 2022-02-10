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
   948 * (190 / Math.round((1600 * ((100 - 19.726) / 100) * 79) / 107)) + "px"
);
document.documentElement.style.setProperty(
   "--h",
   document.getElementById("head").clientHeight + "px"
);
console.log(document.getElementById("head").clientHeight);
var toggleButton = document.querySelector(".toggle-menu");
var navBar = document.querySelector(".nav-bar");
toggleButton.addEventListener("click", function () {
   navBar.classList.toggle("toggle");
   toggleButton.classList.toggle("tog");
});

let al = document.getElementById("al");
let ar = document.getElementById("ar");
let slider = document.getElementById("slider");
let all = 0;

al.addEventListener("click", () => {
   all += 100;
   if (all === 100) {
      all = -300;
   };
   document.querySelectorAll(".slide").forEach((el) => {
      el.style.left = all + "%";
      el.style.transition = "all 0.7s";
   });
});
ar.addEventListener("click", () => {
   all += -100;
   if (all === -400) {
      all = 0;
   };
   document.querySelectorAll(".slide").forEach((el) => {
      el.style.left = all + "%";
      el.style.transition = "all 0.7s";
   });
});