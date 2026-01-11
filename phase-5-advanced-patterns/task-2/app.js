let count = 0;
const counter = document.getElementById("count");
const inc = document.getElementById("inc");
const dec = document.getElementById("dec");
const reset = document.getElementById("reset");

inc.addEventListener("click", () => {
  count++;
  counter.innerText = count;
});
reset.addEventListener("click", () => {
  count = 0;
  counter.innerText = 0;
});
dec.addEventListener("click", () => {
  count--;
  counter.innerText = count;
});
