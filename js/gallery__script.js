const modal = document.querySelector(".modal");

const imgModal = document.querySelector(".modal-img");

const imgGallery = document.querySelectorAll(".img-gallery");

const imgOutfit = document.querySelectorAll(".img-outfit");

const imgSrc = document.querySelector(".modal-img-front");


let modalImgOn = false;

function imgOn() {
    setTimeout(function(){
        imgModal.classList.toggle("off-1");
  }, 300);
    setTimeout(function(){
        modal.classList.toggle("off");
  }, 20);
    noScroll();
    modal.removeAttribute("hidden");
    modalImgOn = true;
};


function imgOff() {
    imgModal.classList.toggle("off-1");
    setTimeout(function(){
    modal.setAttribute("hidden", "true");
  }, 400);
  noScroll();
    setTimeout(function(){
        modal.classList.toggle("off");
  }, 200);
};

imgGallery.forEach(imageGallery =>{
    imageGallery.addEventListener('click', ()=>{
        let src = imageGallery.getAttribute('src');
        imgSrc.setAttribute("src", src);
        imgOn();
    })
})

imgOutfit.forEach(imageOutfit =>{
    imageOutfit.addEventListener('click', ()=>{
        let src = imageOutfit.getAttribute('src');
        imgSrc.setAttribute("src", src);
        imgOn();
    })
})

modal.addEventListener("click",()=>{
    imgOff();
    modalImgOn = false;
});


imgSrc.addEventListener('click',(e)=>{
    e.stopPropagation();
});


body.addEventListener("keydown",(e)=>{
    let key = e.keyCode
    if (key == 27 && modalImgOn == true) {
    imgOff();
    modalImgOn = false;
    }
});

// Btn agendar 
document.getElementById('agendarBtn').addEventListener('click', function() {
    let titulo = "Boda de Andres y Anna";
    let descripcion = "Esperamos que nos acompañes en este día tan especial para nosotros.";
    let location = "Calle 2 Nte 1603-B, Benito Juárez, 74220 Atlixco, Pue.";
    let startDate = "2025-04-16T10:00:00"; // Fecha y hora de inicio del evento
    let endDate = "2025-04-16T16:00:00";   // Fecha y hora de fin del evento

    let googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(titulo)}&dates=${startDate.replace(/-|:|\./g, '')}/${endDate.replace(/-|:|\./g, '')}&details=${encodeURIComponent(descripcion)}&location=${encodeURIComponent(location)}`;

    window.open(googleCalendarUrl, '_blank');
});