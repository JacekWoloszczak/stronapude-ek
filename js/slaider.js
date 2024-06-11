const leftBtn = document.querySelector(".slaider_btn_left");
const rightBtn = document.querySelector(".slaider_btn_right");
const slaiderBox = document.querySelector(".slaider_opinion");
const slaiderContent = document.querySelectorAll(".slaider_content");
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

  slaiderBox.style.transform = `translateX(${-index * slaiderWidth}%)`;
};

const handleRightButton = () => {
  index++;

  resetInterval();
};
const handleLeftButton = () => {
  index--;

  resetInterval();
};

const resetInterval = () => {
  changeContent();
  clearInterval(startSlaider);
  startSlaider = setInterval(handleSlaider, slaiderSpeed);
};
rightBtn.addEventListener("click", handleRightButton);
leftBtn.addEventListener("click", handleLeftButton);
