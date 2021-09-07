const image = document.getElementById("image")
const play_pause_btn = document.getElementById("play-pause")
const audio = document.getElementById("audio")
const stop_btn = document.getElementById("stop")

let isplaying = false;

play_pause_btn.addEventListener('click',()=>{
    if(isplaying)
    {
        audio.pause();
        image.style.animationPlayState = "paused"
        play_pause_btn.innerHTML = 'PLAY'
        isplaying = false;
    }
    else{
        audio.play();
        image.style.animationPlayState = "running"
        play_pause_btn.innerHTML = 'PAUSA'
        isplaying = true;
    }
});
stop_btn.addEventListener('click',()=>{
    audio.load();
    image.style.animationPlayState = "paused"
});

window.addEventListener("load",() => {
    tiempo.max = audio.duration;
    setInterval(() => {
        tiempo.value = audio.currentTime;
    }, 1000);
});
tiempo.addEventListener("change", () => {
    audio.currentTime = tiempo.value;
});

volume_up_btn.addEventListener("click", () => {
    audio.volume += 0.1;
});
volume_down_btn.addEventListener("click", () => {
    audio.volume -= 0.1;
});
{}