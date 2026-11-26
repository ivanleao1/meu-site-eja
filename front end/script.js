let clickCount = 0;

const countDisplay = document.querySelector("#count");
const decrementButton = document.querySelector("#decrement");
const incrementButton = document.querySelector("#increment");
const resetButton = document.querySelector("#reset");

function updateCounter() {
  countDisplay.textContent = clickCount.toLocaleString("pt-BR");
  decrementButton.disabled = clickCount === 0;
}

incrementButton.addEventListener("click", () => {
  clickCount += 1;
  updateCounter();
});

decrementButton.addEventListener("click", () => {
  if (clickCount > 0) {
    clickCount -= 1;
    updateCounter();
  }
});

resetButton.addEventListener("click", () => {
  clickCount = 0;
  updateCounter();
});
