const colour = [
  "Red",
  "Green",
  "Blue",
  "#FF00BF",
  "RGB(255 220 128)",
  "Black",
  "Orange",
  "White",
];

const a = document.getElementById("btn");
const b = document.querySelector("body");
const c = document.querySelector(".color");

a.addEventListener("click", function () {
  let r = Math.floor(Math.random() * colour.length);
  b.style.backgroundColor = colour[r];
  c.textContent = colour[r];
});
