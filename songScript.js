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
let audioElement = new Audio(`Songs/5.mp3`);

let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})

const togglePlayPause = ()=> {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
}

masterPlay.addEventListener('touchstart', (event)=>{
    event.preventDefault()
    togglePlayPause()

})
masterPlay.addEventListener('click', (event)=>{
    event.preventDefault()
    togglePlayPause()
})
audioElement.addEventListener('play', function () {
    document.body.style.animation = 'colorChanger 3s infinite';
});

audioElement.addEventListener('pause', function () {
    document.body.style.animation = 'none';
});

audioElement.addEventListener('ended', function () {
    document.body.style.animation = 'none';
});

audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
audioElement.addEventListener('ended', ()=>{
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
})

let songTime = document.getElementById('songTime');
let songDuration = document.getElementById('songDuration');
audioElement.addEventListener('timeupdate', ()=>{
    songTime.innerText = formatTime(audioElement.currentTime);
    songDuration.innerText = formatTime(audioElement.duration);
})
const formatTime=(time)=> {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
console.log("time ",audioElement.currentTime);
console.log("duration ",Number(audioElement.duration));


const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})