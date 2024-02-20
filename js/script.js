const container = document.querySelector(".span_we_are_here");
const hideMap = document.querySelector(".wrapper_map_container");

container.addEventListener("click", () => {
  hideMap.classList.toggle("is-visibility");
});

const panels = document.querySelectorAll(".card");
const text = document.querySelector(".content");
const paragraph = document.querySelector(".content_welcome");
const paragraphLorem = document.querySelector(".content_lorem");
const headerContentWelcome = document.querySelector(".head_content_welcome-h2");
const headerContent = document.querySelector(".head_content-h2");
const slaiderBox = document.querySelector(".slaider_opinion");
const slaiderContent = document.querySelectorAll(".slaider_content");
const leftBtn = document.querySelector(".slaider_btn_left");
const rightBtn = document.querySelector(".slaider_btn_right");
const first = document.querySelector(".one");
const second = document.querySelector(".two");
const third = document.querySelector(".three");
const slaiderWidth = 500;
const slaiderSpeed = 5000;

panels.forEach((panel, index) => {
  panel.addEventListener("click", () => {
    removeActiveClass();
    panel.classList.add("active");
    switch (index) {
      case 0:
        headerContentWelcome.style.display = "block";
        headerContent.style.display = "none";
        paragraph.style.display = "block";
        paragraph.classList.add("see");
        text.style.display = "none";
        paragraphLorem.style.display = "none";
        break;

      case 1:
        headerContentWelcome.style.display = "none";
        headerContent.style.display = "block";
        paragraph.style.display = "none";
        text.style.display = "block";
        text.classList.add("see");
        paragraphLorem.style.display = "none";
        break;
      case 2:
        paragraph.style.display = "none";
        text.style.display = "none";
        paragraphLorem.style.display = "block";
        paragraphLorem.classList.add("see");
        break;
    }
  });
});

function removeActiveClass() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

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

  slaiderBox.style.transform = `translateX(${index * slaiderWidth}px)`;
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
