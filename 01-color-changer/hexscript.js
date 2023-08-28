const colour = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const a = document.getElementById("btn");
const b = document.querySelector(".color");

a.addEventListener("click", () => {
  let hash = "#";
  for (i = 0; i < 6; i++) {
    let r = Math.floor(Math.random() * colour.length);
    hash = hash + colour[r];
  }
  document.body.style.backgroundColor = hash;
  b.textContent = hash;
  hash = "#";
});
