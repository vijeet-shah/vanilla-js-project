const increaseButton = document.getElementById("btnplus");
const resetButton = document.getElementById("btnreset");
const decreaseButton = document.getElementById("btnminus");
const numberElement = document.querySelector(".number");

let num = 0;

increaseButton.addEventListener("click", () => {
  num++;
  numberElement.textContent = num;
});

decreaseButton.addEventListener("click", () => {
  num--;
  numberElement.textContent = num;
});

resetButton.addEventListener("click", () => {
  num = 0;
  numberElement.textContent = num;
});
