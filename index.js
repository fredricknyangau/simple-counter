(function Counter () {
  // Initialize the count variable to 0
  let count = 0;

  // Get the counter element from the DOM and set its initial value to the count
  const counterElement = document.getElementById('counter');
  counterElement.innerHTML = count;

  // Get the increase button element from the DOM and add a click event listener
  const increaseButton = document.getElementById('increase');
  increaseButton.addEventListener('click', function () {
    // Increment the count and update the counter element's inner HTML
    count++;
    counterElement.innerHTML = count;
  });

  // Get the decrease button element from the DOM and add a click event listener
  const decreaseButton = document.getElementById('decrease');
  decreaseButton.addEventListener('click', function () {
    // Decrement the count and update the counter element's inner HTML
    count--;
    counterElement.innerHTML = count;
  });

  // Get the reset button element from the DOM and add a click event listener
  document.getElementById('reset').addEventListener('click', function () {
    // Reset the count to 0 and update the counter element's inner HTML
    count = 0;
    counterElement.innerHTML = count;
  });
})();