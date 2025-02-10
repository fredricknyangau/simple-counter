function counter () {
    let count = 0;
    document.getElementById('counter').innerHTML = count;

    document.getElementById('increase').addEventListener('click', function () {
      count++;
      document.getElementById('counter').innerHTML = count;
    });

    document.getElementById('decrease').addEventListener('click', function () {
      count--;
      document.getElementById('counter').innerHTML = count;
    });
    
    document.getElementById('reset').addEventListener('click', function () {
      count = 0;
      document.getElementById('counter').innerHTML = count;
    });
  }
  counter();