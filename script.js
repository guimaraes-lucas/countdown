const dias = document.getElementById('dias');
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const countdown = setInterval(function () {
    let currentDate = new Date();
    let targetDate = new Date('28 jul 2023');

    let totalTime = (targetDate - currentDate) / 1000;

    let remainingDays = Math.floor(totalTime / 3600 / 24);
    let remainingHours = Math.floor(totalTime / 3600) % 24;
    let remainingMinutes = Math.floor(totalTime / 60) % 60;
    let remainingSeconds = Math.floor(totalTime) % 60;

    if (remainingDays < 10) {remainingDays = '0' + remainingDays};
    if (remainingHours < 10) {remainingHours = '0' + remainingHours};
    if (remainingMinutes < 10) {remainingMinutes = '0' + remainingMinutes};
    if (remainingSeconds < 10) {remainingSeconds = '0' + remainingSeconds};

    dias.innerHTML = remainingDays;
    horas.innerHTML = remainingHours;
    minutos.innerHTML = remainingMinutes;
    segundos.innerHTML = remainingSeconds;
}, 1000)


