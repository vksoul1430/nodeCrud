let startTime;
let elapsedTime = 0;
let timerInterval;

function formatTime(time) {
  let hours = Math.floor(time / 3600000);
  let minutes = Math.floor((time % 3600000) / 60000);
  let seconds = Math.floor((time % 60000) / 1000);

  return (
    (hours < 10 ? '0' : '') + hours + ':' +
    (minutes < 10 ? '0' : '') + minutes + ':' +
    (seconds < 10 ? '0' : '') + seconds
  );
}

function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function () {
    elapsedTime = Date.now() - startTime;
    document.getElementById('stopwatch').textContent = formatTime(elapsedTime);
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
  console.log('Elapsed time:', formatTime(elapsedTime));
  elapsedTime = 0;
  document.getElementById('stopwatch').textContent = formatTime(elapsedTime);
}

document.getElementById('startBtn').addEventListener('click', startTimer);
document.getElementById('stopBtn').addEventListener('click', stopTimer);

