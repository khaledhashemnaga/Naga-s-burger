//adjusting cheese burger span

const cheese = document.querySelector(".cheese");
function picon() {
  document.querySelector("#menu").style.backgroundImage =
    "url('../myCode/burgers photos/3.jpg')";
  document.querySelector("#menu").style.backgroundSize = "contain";
  document.querySelector("#menu").style.backgroundRepeat = "no-repeat";
  document.querySelector("#menu").style.backgroundPosition = "center";
  document.querySelector(".fries").style.display = "none";
  document.querySelector(".beverages").style.display = "none";
}
function picoff() {
  document.querySelector("#menu").style.backgroundImage = "none";
  document.querySelector(".fries").style.display = "initial";
  document.querySelector(".beverages").style.display = "initial";
}
cheese.addEventListener("mouseover", picon);
cheese.addEventListener("mouseout", picoff);

//adjusting chicken burger span

const chicken = document.querySelector(".chicken");
function picon2() {
  document.querySelector("#menu").style.backgroundImage =
    "url('../myCode/burgers photos/6.jpg')";
  document.querySelector("#menu").style.backgroundSize = "contain";
  document.querySelector("#menu").style.backgroundRepeat = "no-repeat";
  document.querySelector("#menu").style.backgroundPosition = "center";
  document.querySelector(".fries").style.display = "none";
  document.querySelector(".beverages").style.display = "none";
}
function picoff2() {
  document.querySelector("#menu").style.backgroundImage = "none";
  document.querySelector(".fries").style.display = "initial";
  document.querySelector(".beverages").style.display = "initial";
}
chicken.addEventListener("mouseover", picon2);
chicken.addEventListener("mouseout", picoff2);

//adjusting bacon burger span

const bacon = document.querySelector(".bacon");
function picon3() {
  document.querySelector("#menu").style.backgroundImage =
    "url('../myCode/burgers photos/9.jpg')";
  document.querySelector("#menu").style.backgroundSize = "contain";
  document.querySelector("#menu").style.backgroundRepeat = "no-repeat";
  document.querySelector("#menu").style.backgroundPosition = "center";
  document.querySelector(".fries").style.display = "none";
  document.querySelector(".beverages").style.display = "none";
}

function picoff3() {
  document.querySelector("#menu").style.backgroundImage = "none";
  document.querySelector(".fries").style.display = "initial";
  document.querySelector(".beverages").style.display = "initial";
}
bacon.addEventListener("mouseover", picon3);
bacon.addEventListener("mouseout", picoff3);

//adjusting hawaiian burger span

const hawai = document.querySelector(".hawai");
function picon4() {
  document.querySelector("#menu").style.backgroundImage =
    "url('../myCode/burgers photos/2.jpg')";
  document.querySelector("#menu").style.backgroundSize = "contain";
  document.querySelector("#menu").style.backgroundRepeat = "no-repeat";
  document.querySelector("#menu").style.backgroundPosition = "center";
  document.querySelector(".fries").style.display = "none";
  document.querySelector(".beverages").style.display = "none";
}
function picoff4() {
  document.querySelector("#menu").style.backgroundImage = "none";
  document.querySelector(".fries").style.display = "initial";
  document.querySelector(".beverages").style.display = "initial";
}
hawai.addEventListener("mouseover", picon4);
hawai.addEventListener("mouseout", picoff4);

//adjusting fish burger span

const fish = document.querySelector(".fish");
function picon5() {
  document.querySelector("#menu").style.backgroundImage =
    "url('../myCode/burgers photos/8.jpg')";
  document.querySelector("#menu").style.backgroundSize = "contain";
  document.querySelector("#menu").style.backgroundRepeat = "no-repeat";
  document.querySelector("#menu").style.backgroundPosition = "center";
  document.querySelector(".fries").style.display = "none";
  document.querySelector(".beverages").style.display = "none";
}
function picoff5() {
  document.querySelector("#menu").style.backgroundImage = "none";
  document.querySelector(".fries").style.display = "initial";
  document.querySelector(".beverages").style.display = "initial";
}
fish.addEventListener("mouseover", picon5);
fish.addEventListener("mouseout", picoff5);

//adjusting combo burger span

const combo = document.querySelector(".combo");
function picon6() {
  document.querySelector("#menu").style.backgroundImage =
    "url('../myCode/burgers photos/7.jpg')";
  document.querySelector("#menu").style.backgroundSize = "contain";
  document.querySelector("#menu").style.backgroundRepeat = "no-repeat";
  document.querySelector("#menu").style.backgroundPosition = "center";
  document.querySelector(".fries").style.display = "none";
  document.querySelector(".beverages").style.display = "none";
}
function picoff6() {
  document.querySelector("#menu").style.backgroundImage = "none";
  document.querySelector(".fries").style.display = "initial";
  document.querySelector(".beverages").style.display = "initial";
}
combo.addEventListener("mouseover", picon6);
combo.addEventListener("mouseout", picoff6);

//adjusting cheese fries span

const cheesefr = document.querySelector(".cheesefr");
function picon7() {
  document.querySelector("#menu").style.backgroundImage =
    "url('../myCode/burgers photos/11.jpg')";
  document.querySelector("#menu").style.backgroundSize = "contain";
  document.querySelector("#menu").style.backgroundRepeat = "no-repeat";
  document.querySelector("#menu").style.backgroundPosition = "center";
  document.querySelector(".fries").style.display = "none";
  document.querySelector(".beverages").style.display = "none";
}
function picoff7() {
  document.querySelector("#menu").style.backgroundImage = "none";
  document.querySelector(".fries").style.display = "initial";
  document.querySelector(".beverages").style.display = "initial";
}
cheesefr.addEventListener("mouseover", picon7);
cheesefr.addEventListener("mouseout", picoff7);

//adjusting chili fries span

const chili = document.querySelector(".chili");
function picon8() {
  document.querySelector("#menu").style.backgroundImage =
    "url('../myCode/burgers photos/10.jpg')";
  document.querySelector("#menu").style.backgroundSize = "contain";
  document.querySelector("#menu").style.backgroundRepeat = "no-repeat";
  document.querySelector("#menu").style.backgroundPosition = "center";
  document.querySelector(".fries").style.display = "none";
  document.querySelector(".beverages").style.display = "none";
}
function picoff8() {
  document.querySelector("#menu").style.backgroundImage = "none";
  document.querySelector(".fries").style.display = "initial";
  document.querySelector(".beverages").style.display = "initial";
}
chili.addEventListener("mouseover", picon8);
chili.addEventListener("mouseout", picoff8);

//smooth scrolling

const navbarToggler = document.querySelector(".navbar");
const navbarMenu = document.querySelector(".navbar ul");
const navbarLinks = document.querySelectorAll(".navbar a");
navbarToggler.addEventListener("click", navbarTogglerClick);
function navbarTogglerClick() {
  navbarToggler.classList.toggle("open-navbar-toggler");
  navbarMenu.classList.toggle("open");
}
for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", navbarLinkClick);
}
function navbarLinkClick(event) {
  smoothScroll(event);
  if (navbarMenu.classList.contains("open")) {
    navbarToggler.click();
  }
}

// APPROACH #3 - window.requestAnimationFrame()

function smoothScroll(event) {
  event.preventDefault();
  const targetId =
    event.currentTarget.getAttribute("href") === "#"
      ? "header"
      : event.currentTarget.getAttribute("href");
  const targetPosition = document.querySelector(targetId).offsetTop;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 1000;
  let start = null;
  window.requestAnimationFrame(step);
  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(
      0,
      easeInOutCubic(progress, startPosition, distance, duration)
    );
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

// Easing Functions

function linear(t, b, c, d) {
  return (c * t) / d + b;
}
function easeInOutQuad(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
}
function easeInOutCubic(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t * t + b;
  t -= 2;
  return (c / 2) * (t * t * t + 2) + b;
}
