let index = 0;

const handleSlaider = () => {
  index++;
  changeContent();
};
let start = setInterval(handleSlaider, slaiderSpeed);
const changeContent = () => {
  if (index > slaiderContent.length - 1) {
    index = 0;
  } else if (index < 0) {
    index = slaiderContent.length - 1;
  }

  slaiderBox.style.transform = `translateX(${index * slaiderWidth}%)`;
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
  clearInterval(start);
  start = setInterval(handleSlaider, slaiderSpeed);
};
rightBtn.addEventListener("click", handleRightButton);
leftBtn.addEventListener("click", handleLeftButton);
