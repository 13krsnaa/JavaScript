const input = document.querySelector("#searchInput");
const result = document.querySelector("#result");

function debounce(fn, delay) {
  let timer;

  return function () {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn();
    }, delay);
  };
}

function searchHandler() {
  const value = input.value;

  console.log("Searching for:", value);
  result.innerText = "Result for: " + value;
}

const debouncedSearch = debounce(searchHandler, 500);

input.addEventListener("input", function () {
  debouncedSearch();
});
