let timerInterval;

function startTimer() {
    const minutesInput = document.getElementById("minutes").value;
    const secondsInput = document.getElementById("seconds").value;

    let time = parseInt(minutesInput) * 60 + parseInt(secondsInput);

    clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;

        // Format seconds to always show two digits
        document.getElementById("timeDisplay").textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        if (time <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
        } else {
            time--;
        }
    }, 1000);
}
