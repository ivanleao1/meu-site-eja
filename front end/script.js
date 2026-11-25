let clickCount = 0;

const countDisplay = document.querySelector("#count");
const incrementButton = document.querySelector("#increment");
const resetButton = document.querySelector("#reset");

incrementButton.addEventListener("click", () => {
  clickCount += 1;
  countDisplay.textContent = clickCount;
});

resetButton.addEventListener("click", () => {
  clickCount = 0;
  countDisplay.textContent = clickCount;
});
