let intervalId;
    let seconds = 0;
    let minutes = 0;
    let hours = 0;

    function updateTimer() {
      seconds++;

      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }

      if (minutes === 60) {
        minutes = 0;
        hours++;
      }

      const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      document.getElementById('timer').innerText = formattedTime;
    }

    function startTimer() {
      intervalId = setInterval(updateTimer, 1000);
    }

    function pauseTimer() {
      clearInterval(intervalId);
    }

    function resetTimer() {
      clearInterval(intervalId);
      seconds = 0;
      minutes = 0;
      hours = 0;
      document.getElementById('timer').innerText = '00:00:00';
    }