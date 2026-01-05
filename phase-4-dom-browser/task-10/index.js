// Finl TASK-10
// Debounce and thottle

//debounce
function debounce(fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer); //purana timer htaya
    timer = setTimeout(fn, delay); // nya timer lgaya
  };
}

//throttle
function throttle(fn, delay) {
  let canRun = true;
  return function () {
    if (!canRun) return;
    canRun = false;
    setTimeout(() => {
      canRun = true;
    }, delay);
  };
}

// TEST
const debounced = debounce(() => {
  console.log("Debounced fired");
}, 5000);

const throttled = throttle(() => {
  console.log("Throttle fired");
}, 5000);

//RAPID Call
setInterval(() => {
  debounced();
  throttled();
  console.log("Call");
}, 300);
