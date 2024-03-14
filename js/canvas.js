const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

const rand = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const angleToRadian = function (angle) {
  return (Math.PI / 180) * angle;
};

const gradients = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
gradients.addColorStop(0, "#ebaf77");

gradients.addColorStop(0.5, "yellow");
gradients.addColorStop(1, "black");

ctx.strokeStyle = gradients;

for (let i = 0; i < 50; i++) {
  ctx.beginPath();
  const x = rand(20, canvas.width);
  const y = rand(20, canvas.height);
  const r = rand(10, 100);
  const lineW = rand(1, 10);
  ctx.arc(x, y, r, 0, angleToRadian(360));
  ctx.lineWidth = lineW;
  ctx.stroke();
}
ctx.font = "50px Inter";

ctx.fillText(
  "Zakład opakowań tekturowych Bogdan Kamiński",
  40,
  canvas.height / 2
);
