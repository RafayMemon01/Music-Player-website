console.log("Warning! The Developer Tools in Browser Only Use When Website is in Development Stage. Don't Perform Any Task Here!")


// let audioElement = new Audio("/Songs/1.mp3");






// let childNames = [
//   {cname: "Rafay"},
//   { cname: "Hamza" },
//   { cname: "Shafay" },
//   { cname: "Rehman" },
// ];

// let lists = document.querySelectorAll(".List");
// lists.forEach((list) => {
//   let children = Array.from(list.children);
//   children.forEach((child, i) => {
//     child.innerHTML = childNames[i].cname;
//     console.log(child);
//   });
// });
// let songBtn = document
//   .getElementById("playSongBtn")
//   .addEventListener("click", () => {
//     if(audioElement.paused || audioElement.currentTime<=0){
//       audioElement.play();
//       console.log("play");
//     }else{
//       audioElement.pause();
//       console.log("pause");
//     }
//   });

// let DbSongBtn = document
//   .getElementById("pauseSongBtn")
//   .addEventListener("click", () => {
//     audioElement.pause();
//     console.log("pause");
//   });



setInterval(() => {
  
  let timer = new Date()
  let hours = timer.getHours();
  let minutes = timer.getMinutes();
  let seconds = timer.getSeconds();

  let update = `${hours}:${minutes}:${seconds}`;


  let time = document.querySelector(".time").innerHTML=update;
}, 1000);


  console.log()


const checkedBox = ()=>{
  let checkBox = document.getElementById("checkbx");
  let player = document.querySelector(".player")

  if (checkBox.checked!==true) {

    player.setAttribute("id","disable");
    
  }
  else{
    player.removeAttribute("id");
  }
}