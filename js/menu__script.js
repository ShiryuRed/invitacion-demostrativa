const iconOpen = document.querySelector(".i__open");

const iconClose = document.querySelector(".i__close");


const navMenu = document.querySelector(".nav__container");

const aMenu = document.querySelectorAll(".nav__a");

let menuOn = false;

for (let i = 0; i < aMenu.length; i++) {
    aMenu[i].addEventListener('click', function() {
      closeMenu();
      noScrollSize();
    });
}


function openMenu(){
  iconClose.style.transform = "scale(1)";
  iconOpen.style.transform = "scale(0)";
  navMenu.classList.toggle("nav__open");
  menuOn = true;
}

function closeMenu(){
  iconClose.style.transform = "scale(0)";
  iconOpen.style.transform = "scale(1)";
  navMenu.classList.toggle("nav__open");
  menuOn = false;
}

iconOpen.addEventListener("click",()=>{
  openMenu();
  noScroll();
})

iconClose.addEventListener("click",()=>{
  closeMenu();
  noScrollSize();
})



body.addEventListener("keydown",(e)=>{
    let key = e.keyCode
    if (key == 27 && menuOn == true) {
    closeMenu();
    noScroll();
    menuOn = false;
    }
});






const audio = document.querySelector(".audio");
const audio2 = document.querySelector(".audio-2");
const audioPlay = document.querySelector(".music-on");
const audioStop = document.querySelector(".music-off");

/*const audioControlOff = () => {
  audioPlay.classList.toggle("mute");
  audio.pause();
  audioStop.classList.toggle("play");
}
const audioControlOn = () => {
  audioStop.classList.toggle("play");
  audio.play();
  audioPlay.classList.toggle("mute");
}*/

const audioControlOff = () => {
  audioPlay.classList.toggle("mute");
  audio.pause();
  audio2.pause();
  audioStop.classList.toggle("play");
}
const audioControlOn = () => {
  audioStop.classList.toggle("play");
  audio.play();
  audioPlay.classList.toggle("mute");
}

audioPlay.addEventListener("click", (e)=>{
  audioControlOff();
})
audioStop.addEventListener("click", (e)=>{
  audioControlOn();
})

audio.volume = 0.5;

const musicStart = () => {
  audio.play();
}

 window.addEventListener("blur", () => {
          audioControlOff();
      });