const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
ctx.clearRect(0, 0, canvas.width, canvas.height);

const rand = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const gradients = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
gradients.addColorStop(0, "white");

gradients.addColorStop(0.5, "grey");
gradients.addColorStop(1, "black");

ctx.strokeStyle = gradients;

for (let i = 0; i < 30; i++) {
  ctx.beginPath();
  const x = rand(10, canvas.width - 200);
  const y = rand(10, canvas.height - 200);
  const size = (10, 200);
  const lineW = rand(1, 5);
  ctx.strokeRect(x, y, size, size);
  ctx.lineWidth = lineW;
}
