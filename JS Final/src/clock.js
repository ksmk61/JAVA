const clock = document.querySelector("h1#clock");
const eveDate = new Date('December 24, 2021 00:00:00');

function present() {
    const presentTime = new Date();
    const hour = String(presentTime.getHours());
    const min = String(presentTime.getMinutes());
    const sec = String(presentTime.getSeconds());
    clock.innerText = `${hour.padStart(2,"0")}:${min.padStart(2,"0")}:${sec.padStart(2,"0")}`;
}

//1초마다 present 실행
setInterval(present, 1000);