let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
    {songName: "Let Me Love You", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Chalo Le Chale Tumhe", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Toota Jo Kabhi Taara", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Dil Me Mere Hai Darde Disco", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Holi Khele Raghvira Awadh Me", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Yaar Tera Superstar", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Saiyaan Pshycho", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Mai Pal Do Pal Ka Saayar Hu", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "DJ Waale Babu", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Hamdard Hai", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"}
];

songItems.forEach((elem, i) => {
    console.log(elem, i);
    elem.querySelector("img").setAttribute("src", songs[i].coverPath);
    elem.querySelector(".songName").innerHTML = songs[i].songName;
})

// Play/Pause Songs
masterPlay.addEventListener("click", () => {
    // if(masterPlay.classList.contains("fa-play-circle")) {
    if(audioElement.paused || audioElement.currentTime == 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        gif.style.opacity = 0;
    }
})

// Listening to Other Events
audioElement.addEventListener("timeupdate", () => {
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener("change", () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})
