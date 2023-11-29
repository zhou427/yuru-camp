document.addEventListener('DOMContentLoaded', function () {
    var audio = document.getElementById('backgroundMusic');
    var toggleButton = document.getElementById('toggleMusic');
    audio.volume = 0.1;

    // 切换音乐的状态
    function toggleMusic() {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    }

    // 点击按钮时切换音乐状态
    toggleButton.addEventListener('click', toggleMusic);
});
// JavaScript 代码
let isRotating = false;
let rotationInterval;

function toggleRotation() {
    const musicIcon = document.getElementById('musicIcon');

    if (isRotating) {
        // 停止旋转
        clearInterval(rotationInterval);
    } else {
        // 开始旋转
        rotationInterval = setInterval(() => {
            musicIcon.style.transform = `rotate(${(parseFloat(musicIcon.style.transform.replace('rotate(', '').replace('deg)', '')) || 0) + 1}deg)`;
        }, 10);
    }

    // 切换旋转状态
    isRotating = !isRotating;
}