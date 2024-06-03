// List of songs with details
let songs = [
    { songName: "Aram Ata Hai", filePath: "Songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Broken Angel", filePath: "Songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Lovely", filePath: "Songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Hasi ban Gaye", filePath: "Songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Let Me Down/Me Dhundne", filePath: "Songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Dark Side", filePath: "Songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Tu Hai Kaha", filePath: "Songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Zindagi Tum Hi Ho", filePath: "Songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Unstoppable", filePath: "Songs/9.mp3", coverPath: "covers/9.jpg" }
];

// Variables
let songIndex = 0;
let audioElement = new Audio(songs[songIndex].filePath);
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let volumeControl = document.getElementById('volumeControl');
let songItems = Array.from(document.getElementsByClassName('songItem'));

// Initialize song list
songItems.forEach((element, i) => { 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
});

// Toggle play/pause state
const togglePlayPause = () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
};

// Event listeners for play/pause button
masterPlay.addEventListener('touchstart', (event) => {
    event.preventDefault();
    togglePlayPause();
});
masterPlay.addEventListener('click', (event) => {
    event.preventDefault();
    togglePlayPause();
});

// Update body animation on play/pause
audioElement.addEventListener('play', () => {
    document.body.style.animation = 'colorChanger 3s infinite';
});
audioElement.addEventListener('pause', () => {
    document.body.style.animation = 'none';
});
audioElement.addEventListener('ended', () => {
    document.body.style.animation = 'none';
});

// Update progress bar and song time
audioElement.addEventListener('timeupdate', () => { 
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100); 
    myProgressBar.value = progress;

    document.getElementById('songTime').innerText = formatTime(audioElement.currentTime);
    document.getElementById('songDuration').innerText = formatTime(audioElement.duration);
});

// Seek song position
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

// Reset play/pause icon on song end
audioElement.addEventListener('ended', () => {
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
});

// Format time in minutes and seconds
const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

// Reset all play buttons
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    });
};

// Event listeners for individual song play buttons
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => { 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = songs[songIndex].filePath;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    });
});

// Event listener for next button
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= songs.length - 1) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});

// Event listener for previous button
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    } else {
        songIndex -= 1;
    }
    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});

// Event listener for volume control
volumeControl.addEventListener('input', () => {
    audioElement.volume = volumeControl.value / 100;
});
