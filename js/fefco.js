const button = document.querySelectorAll(".fefco_button");
const fefcoDiv = document.querySelectorAll(".fefco_catalogue");
function OpenFefco() {
  if (this.nextElementSibling.classList.contains("is-flex")) {
    this.nextElementSibling.classList.remove("is-flex");
  } else {
    CloseFefco();
    this.nextElementSibling.classList.add("is-flex");
  }
}

const CloseFefco = () => {
  fefcoDiv.forEach((item) => {
    item.classList.remove("is-flex");
  });
};

button.forEach((el) => {
  el.addEventListener("click", OpenFefco);
});
