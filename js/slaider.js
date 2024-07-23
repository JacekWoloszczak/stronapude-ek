const slaiderDots = document.querySelector(".slaider_dots");
const dots = document.querySelectorAll(".dots");
const dotFirst = document.querySelector(".dot_first");
const dotSecond = document.querySelector(".dot_second");
const dotThird = document.querySelector(".dot_third");
const dotFourth = document.querySelector(".dot_");
const dotFifth = document.querySelector(".dot_first");

const slaiderBox = document.querySelector(".slaider_opinion");
const slaiderContent = document.querySelectorAll(".slaider_content");
const slaiderContentImgFirst = document.querySelector(".slaider_img-tekst-1");
const slaiderContentImgSecond = document.querySelector(".slaider_img-tekst-2");
const slaiderContentImgThird = document.querySelector(".slaider_img-tekst-3");
const slaiderContentImgFourth = document.querySelector(".slaider_img-tekst-4");
const slaiderContentImgFifth = document.querySelector(".slaider_img-tekst-5");
const slaiderWidth = 100;
const slaiderSpeed = 5000;

let index = 0;

const handleSlaider = () => {
  index++;

  changeContent();
};

let startSlaider = setInterval(handleSlaider, slaiderSpeed);
const changeContent = () => {
  if (index >= 5) {
    index = 0;
  }
  if (index < 0) {
    index = 0;
  }
  if (index === 1) {
    slaiderContentImgFirst.style.backgroundColor = "red";
  }

  if (index === 2) {
    slaiderContentImgSecond.style.backgroundColor = "red";
  }

  slaiderBox.style.transform = `translateX(${-index * slaiderWidth}%)`;
};

const resetInterval = () => {
  changeContent();
  clearInterval(startSlaider);
  startSlaider = setInterval(handleSlaider, slaiderSpeed);
};

dotFirst.addEventListener("click", () => {});
