const moon = document.querySelector(".i__moon");

const sun = document.querySelector(".i__sun");

const darkMode = document.querySelector(".dark-mode-animation");

const body = document.querySelector(".body");


moon.addEventListener("click",()=>{
  sun.style.transform = "scale(1)";
  moon.style.transform = "scale(0)";
  body.classList.toggle("dark");
  noScrollSize();
  closeDarkMode();
})


sun.addEventListener("click",()=>{
  sun.style.transform = "scale(0)";
  moon.style.transform = "scale(1)";
  body.classList.toggle("dark");
  noScrollSize();
  closeDarkMode();
})

function noScroll() {
    body.classList.toggle("no-scroll");
}
function noScrollSize() {
  if (screen.width < 1024) {
    body.classList.toggle("no-scroll")
  } else if (screen.width >= 1024){
    body.classList.remove("no-scroll")
  } 
}

function closeDarkMode() {
  if (screen.width < 1024) {
  setTimeout(function(){
    closeMenu();
  }, 400);
  } else {
    return
  } 
}