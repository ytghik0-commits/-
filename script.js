let timer;
let timeLeft = 25 * 60; // 25 دقيقة بالثواني

const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('start');

// وظيفة تحديث الوقت
function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    
    if (timeLeft === 0) {
        clearInterval(timer);
        alert("انتهى وقت التركيز! خذ استراحة.");
    } else {
        timeLeft--;
    }
}

// زر البدء
startBtn.addEventListener('click', () => {
    if (!timer) {
        timer = setInterval(updateTimer, 1000);
        startBtn.textContent = "إيقاف مؤقت";
    } else {
        clearInterval(timer);
        timer = null;
        startBtn.textContent = "استئناف";
    }
});

// وظائف الصوت
function playTone(type) {
    stopSounds(); // نوقف أي صوت يعمل حالياً
    document.getElementById(`${type}-sound`).play();
}

function stopSounds() {
    document.querySelectorAll('audio').forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });
}
