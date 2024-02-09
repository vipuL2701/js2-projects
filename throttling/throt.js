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

function handleScroll() {
  console.log("Scrolled");
}

const throttledHandleScroll = throttle(handleScroll, 5000);

window.addEventListener("scroll", throttledHandleScroll);
