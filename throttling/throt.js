function throttle(func, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    func(...args);
  };
}

function handleInput(event) {
  console.log("Input value:", event.target.value);
}

const throttledHandleInput = throttle(handleInput, 500);

const inputElement = document.getElementById("inputElement");
inputElement.addEventListener("input", throttledHandleInput);
