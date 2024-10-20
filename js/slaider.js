
let currentIndex = 0;
let newIndex = 0;

const slideElements = document.getElementsByClassName("slider_slide");
const slidesLength = slideElements.length;
const paginationElement =
  document.getElementsByClassName("slider_pagination")[0];
const navElements = document.getElementsByClassName("slider_nav");

const Autoplay = {
  timerId: null,
  interval: 4000,

  start: function () {
    this.timerId = setInterval(function () {
      newIndex++;
      navigateSlider();
    }, this.interval);
  },

  reset: function () {
    clearInterval(this.timerId);
    this.start();
  },
};

function navigateSlider() {
  if (autoplay) {
    Autoplay.reset();
  }

  if (newIndex === -1) {
    newIndex = slidesLength - 1;
  } else if (newIndex === slidesLength) {
    newIndex = 0;
  }

  paginationElement.childNodes[currentIndex].classList.remove(
    "slider_pagination_btn--sel"
  );
  paginationElement.childNodes[newIndex].classList.add(
    "slider_pagination_btn--sel"
  );

  slideElements[currentIndex].style.display = "none";
  slideElements[newIndex].style.display = "block";
  currentIndex = newIndex;
}

navElements[0].addEventListener("click", function () {
  newIndex--;
  navigateSlider();
});

navElements[1].addEventListener("click", function () {
  newIndex++;
  navigateSlider();
});

let paginationHTML = [];
for (let i = 0; i < slidesLength; i++) {
  paginationHTML.push(
    '<button class="slider_pagination_btn" data-index="' + i + '"></button>'
  );
}
paginationElement.innerHTML = paginationHTML.join("");

paginationElement.addEventListener("click", function (e) {
  let target = e.target;
  if (target.classList.contains("slider_pagination_btn")) {
    newIndex = Number(target.getAttribute("data-index"));
    navigateSlider();
  }
});

let autoplay = true;
let autoplayInterval = 4000;
let autoplayTimer = null;

if (autoplay) {
  Autoplay.start();
}

navigateSlider();
