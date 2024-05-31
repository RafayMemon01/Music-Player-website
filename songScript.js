let songs = [
    {songName: "Aram Ata Hai", filePath: "Songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Broken Angel", filePath: "Songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Lovely", filePath: "Songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Hasi ban Gaye", filePath: "Songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Let Me Down/Me Dhundne", filePath: "Songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Dark Side", filePath: "Songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Tu Hai Kaha", filePath: "Songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Zindagi Tum Hi Ho", filePath: "Songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Unstoppable", filePath: "Songs/9.mp3", coverPath: "covers/9.jpg"},
]

// Varibles

let songIndex = 0;
let audioElement = new Audio(`Songs/1.mp3`);

let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})


masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})