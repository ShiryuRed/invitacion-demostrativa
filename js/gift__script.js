const modal2 = document.querySelector(".modal-2");

const giftModal = document.querySelector(".modal-gift");

const btnVisa = document.querySelector(".c-visa");

const btnPaypal = document.querySelector(".c-paypal");

const dataInfo = document.querySelector(".data-info");

const giftInfo = document.querySelector(".gift-info");


const btnContactMe = document.querySelector(".btn-contact-me");

const modal3 = document.querySelector(".modal-3");
const confirmModal = document.querySelector(".modal-confirm");
const confirmInfo = document.querySelector(".confirm-info");


const btnConfirmA = document.querySelector(".btn-confirm");

let visaInfo = true;
let paypalInfo = true;

let modalGiftOn = false;

function giftOn() {
	modal2.removeAttribute("hidden");
    setTimeout(function(){
        modal2.classList.toggle("off");
  }, 20);
    setTimeout(function(){
        giftModal.classList.toggle("off-2");
  }, 200);
	noScroll();
};

function giftOff() {
    giftModal.classList.toggle("off-2");
    setTimeout(function(){
    modal2.setAttribute("hidden", "true");
  }, 400);
  noScroll();
    setTimeout(function(){
        modal2.classList.toggle("off");
  }, 200);
};

function deleteHtml() {
    setTimeout(function(){
        dataInfo.innerHTML = ' ';
  }, 200);
}

function showVisaInfo() {
    if (visaInfo == true) {
        let newHtmlCode = `
            <h3 class="title-gift-modal">Gracias por el apoyo</h3>
            <p>Tarjeta: 4152 3140 7120 6141</p>
            <p>Banco: BBVA</p>
            <p>Gracias!!</p>`;
        dataInfo.innerHTML += newHtmlCode;
    } 
}

function showPaypalInfo() {
    if (paypalInfo == true) {
        let newHtmlCode = `
            <h3 class="title-gift-modal">Gracias por el apoyo</h3>
            <p>Paypal</p>
            <p>Correo: steffi.tlac@gmail.com.</p>
            <p>Gracias!!</p>`;
        dataInfo.innerHTML += newHtmlCode;
    }
}
function showContactInfo() {
    if (paypalInfo == true) {
        let newHtmlCode = `
            <h3 class="title-gift-modal">Numero de contacto</h3>
            <p>Correo: 2b2t115@gmail.com</p>
            <p>Numero: +52 244 104 3578</p>
            <button class='contact-me-whats'>WhatsApp</button>`;
            
        dataInfo.innerHTML += newHtmlCode;
    }
}

giftInfo.addEventListener("click",(e)=> {
    e.stopPropagation();
})

btnVisa.addEventListener("click",()=> {
    giftOn();
    showVisaInfo();
    modalGiftOn = true;
});


btnPaypal.addEventListener("click",()=> { 
    giftOn();
    showPaypalInfo();
    modalGiftOn = true;
});

btnContactMe.addEventListener("click",()=> { 
    giftOn();
    showContactInfo();
    modalGiftOn = true;
});


modal2.addEventListener("click",()=>{
    giftOff();
    deleteHtml();
    modalGiftOn = false;
});

body.addEventListener("keydown",(e)=>{
    let key = e.keyCode
    if (key == 27 && modalGiftOn == true) {
    giftOff();
    deleteHtml();
    modalGiftOn = false;
    }
});


const mapContainer = document.querySelector(".map-transition");
const mapOn = document.querySelector(".si");

mapOn.addEventListener("click",()=>{
    mapContainer.classList.toggle("map-on")
});

const mapContainer2 = document.querySelector(".map-transition2");
const mapOn2 = document.querySelector(".si2");

mapOn2.addEventListener("click",()=>{
    mapContainer2.classList.toggle("map-on")
});



function attendOn() {
    modal3.removeAttribute("hidden");
    setTimeout(function(){
        modal3.classList.toggle("off");
  }, 20);
    setTimeout(function(){
        confirmModal.classList.toggle("off-2");
  }, 200);
    noScroll();
};

function attendOff() {
    confirmModal.classList.toggle("off-2");
    setTimeout(function(){
    modal3.setAttribute("hidden", "true");
  }, 400);
  noScroll();
    setTimeout(function(){
        modal3.classList.toggle("off");
  }, 200);
};


confirmInfo.addEventListener("click",(e)=> {
    e.stopPropagation();
})


btnConfirmA.addEventListener("click",()=> { 
    attendOn();
    modalGiftOn = true;
});
modal3.addEventListener("click",()=>{
    attendOff();
    modalGiftOn = false;
});



const sendButton = document.querySelector(".btn-send");

const invitationNumber = document.getElementById("number-input");

const confirmarFamilia = document.querySelector(".confirmar-familia");

const qrContainer = document.getElementById("qr-container");

const qrContainerStyle = document.querySelector(".container__qr-generator");

const qrTextStyle = document.querySelector(".text-qr");

const QR = new QRCode(qrContainer);

const nombreAsitente = document.querySelector(".nombre-asistencia");

const formI = document.querySelector(".form-invitation")


let number = undefined;

let nAN = undefined;

let invalidId = undefined;

let numberId = undefined;

let qrId = undefined;

invitationNumber.addEventListener("input", (e) => {
    number = invitationNumber.value;
    nAN = isNaN(number);
    if (nAN == true || invitados.length <= number || number == '') {
        invalidId = true;
    }
    numberId = parseInt(number);
    qrId = numberId / 4 -1237;
    Math.trunc(qrId);
    invalidId = false; 
    if (Number.isInteger(qrId) == false) {
        invalidId = true;
    }
    return numberId;
})

sendButton.addEventListener("click", (e) => {
    function compareCodes() {
        if (number == undefined || invalidId == true || invitados.length <= qrId) {
            qrTextStyle.classList.add("text-qr-anim");
            setTimeout(function(){
                qrTextStyle.classList.remove("text-qr-anim");
        }, 1800);
            invitationNumber.classList.add("input-error-anim");
            setTimeout(function(){
                invitationNumber.classList.remove("input-error-anim");
        }, 1800);
        } if (number == '115') {
            audio.pause();
            audio2.play();
        } else {
            let nombre = invitados[qrId]["nombre"];
            let personas = invitados[qrId]["personas"];
            let mesa = invitados[qrId]["mesa"];
        
            let qrText =`Fam: ${nombre}, Pases: ${personas}, Mesa: ${mesa}`;
            let confirmar = confirm(`¿Confirmar ${number} como numero de invitacion?`);
            if (confirmar) {
                confirmInfo.removeChild(sendButton);
                qrContainerStyle.classList.add("anim-qr");
                QR.makeCode(qrText);
                let newHtmlCodeFam = `
                    <h3> ${nombre}</h3>`;
                confirmarFamilia.innerHTML += newHtmlCodeFam;
            }
        }
    }
        compareCodes();
})
formI.addEventListener("submit", (e) => {
        if (number == undefined || invalidId == true || invitados.length <= qrId) {
            qrTextStyle.classList.add("text-qr-anim");
            setTimeout(function(){
                qrTextStyle.classList.remove("text-qr-anim");
        }, 1800);
            invitationNumber.classList.add("input-error-anim");
            setTimeout(function(){
                invitationNumber.classList.remove("input-error-anim");
        }, 1800);
        } if (number == '115') {
            audio.pause();
            audio2.play();
        } else {
            let nombre = invitados[qrId]["nombre"];
            let personas = invitados[qrId]["personas"];
            let mesa = invitados[qrId]["mesa"];
        
            let qrText =`Fam: ${nombre}, Pases: ${personas}, Mesa: ${mesa}`;
            let confirmar = confirm(`¿Confirmar ${number} como numero de invitacion?`);
            if (confirmar) {
                confirmInfo.removeChild(sendButton);
                qrContainerStyle.classList.add("anim-qr");
                QR.makeCode(qrText);
                let newHtmlCodeFam = `
                    <h3>Familia: ${nombre}</h3>`;
                confirmarFamilia.innerHTML += newHtmlCodeFam;
            }
        }
    e.preventDefault();
})


/*
for (let i = 0; i <= 150; i++) {
    let loc = (1237 + i) * 4 ;
    document.write(loc + `<br>`)
}*/


// for (let i = 0; i <= invitados.length; i++) {
//     let loc = (1237 + i) * 4 ;
//     let nombre = invitados[i]["nombre"]
//     let inv = invitados[i]["personas"]
//     let mesa = invitados[i]["mesa"]
    
    
//     document.write(loc + ' ' + nombre + '   <b>Pases: </b>' + inv + '   <b>mesa: </b>' + mesa + `<br>`)
// }






const invitados = [{ nombre: "Migue&Fani", personas: "2", mesa: "Principal"}   
,{nombre: "Lopez Santos", personas: "2", mesa: "A4"}
,{ nombre: "Vicente Santos", personas: "3", mesa: "A4"}
,{ nombre: "Alejandro Santos", personas: "5", mesa: "A4"}
,{ nombre: "Benjamin Frankis", personas: "3", mesa: "C3"}
,{ nombre: "Empty", personas: "cancelado", mesa: "00"}
,{ nombre: "Nancy Matus", personas: "3", mesa: "E5"} 
,{ nombre: "Fran", personas: "3",  mesa: "E5"}
,{ nombre: "Garcia Santos", personas: "3", mesa: "B5"}
,{ nombre: "Viany Garcia Santos", personas: "2", mesa: "B5"}
,{ nombre: "Liz Garcia", personas: "4", mesa: "B5"}
,{ nombre: "Olga Santos", personas: "1", mesa: "B5"}
,{ nombre: "Izquierdo Hernandez", personas: "4", mesa: "D2"} 
,{ nombre: "Pech Izquierdo", personas: "2",  mesa: "D2"}
,{ nombre: "Rocha Tapia", personas: "3", mesa: "E2"}
,{ nombre: "Mello", personas: "3", mesa: "D5"}
,{ nombre: "Tapia Hernandez", personas: "2", mesa: "B2"}
,{ nombre: "Arely Aguilar", personas: "1", mesa: "A5"}
,{ nombre: "Martinez Vidal", personas: "4", mesa: "C2"} 
,{ nombre: "Flores Tapia", personas: "4", mesa: "E2"} 
,{ nombre: "Eunice Tapia", personas: "1",  mesa: "B2"}
,{ nombre: "Rosalba Tapia", personas: "1", mesa: "B2"}
,{ nombre: "Torres Tapia", personas: "4", mesa: "D1"}
,{ nombre: "Morales Garcia", personas: "3", mesa: "A3"}
,{ nombre: "De Jesus Reyes", personas: "2", mesa: "D3"}
,{ nombre: "Garin", personas: "4", mesa: "A3"}
,{ nombre: "Ramirez Limon", personas: "2",  mesa: "D6"}
,{ nombre: "Quechol Arroyo", personas: "2", mesa: "A6"}
,{ nombre: "Hernandez Quechol", personas: "4", mesa: "A6"}
,{ nombre: "Quechol Cuautle", personas: "2", mesa: "A6"}
,{ nombre: "Quechol Hernandez", personas: "3", mesa: "D6"}
,{ nombre: "EMPTY", personas: "0", mesa: "00"} 
,{ nombre: "Saul Lopez", personas: "4",  mesa: "B1"}
,{ nombre: "Yaz", personas: "1", mesa: "E3"}
,{ nombre: "Victor Tlacuilo", personas: "1", mesa: "B3"}
,{ nombre: "Arnulfo Hernandez", personas: "2", mesa: "C1"}
,{ nombre: "Andrea Tlacuilo", personas: "1", mesa: "Principal"}
,{ nombre: "Miguel Perez", personas: "1", mesa: "D5"} 
,{ nombre: "Espinoza Vazques", personas: "3",  mesa: "B1"}
,{ nombre: "Lopez Tapia", personas: "3", mesa: "D1"}
,{ nombre: "Gomez Lopez", personas: "2", mesa: "D1"}
,{ nombre: "Fani Duran", personas: "3", mesa: "E6"}
,{ nombre: "Samuel Flores", personas: "4", mesa: "B2"}
,{ nombre: "EMPTY", personas: "0", mesa: "00"} 
,{ nombre: "Andrade Ruiz", personas: "3",  mesa: "D3"}
,{ nombre: "Sanchez Xelo", personas: "2", mesa: "E4"}
,{ nombre: "Sanchez Zamora", personas: "3", mesa: "E4"}
,{ nombre: "Gomez Zamorano", personas: "2", mesa: "B2"}
,{ nombre: "Elba Reyes", personas: "2", mesa: "E6"}
,{ nombre: "Mario Olguin", personas: "2", mesa: "A3"} 
,{ nombre: "Reyna Romero", personas: "3",  mesa: "D5"}
,{ nombre: "Ventura", personas: "3", mesa: "D5"}
,{ nombre: "Villegas", personas: "2", mesa: "C2"}
,{ nombre: "De la Flor", personas: "6", mesa: "A5"}
,{ nombre: "Dominguez Gonzales", personas: "2", mesa: "C2"}
,{ nombre: "Maldonado Bustamante", personas: "2", mesa: "C2"} 
,{ nombre: "Maldonado Jimenez", personas: "5",  mesa: "E4"}
,{ nombre: "Gonzales Bustamante", personas: "6", mesa: "B6"}
,{ nombre: "Francisco Sanchez", personas: "1", mesa: "A3"}
,{ nombre: "Reyes Barragan", personas: "3", mesa: "D3"}
,{ nombre: "Isauro Coatl", personas: "4", mesa: "C1"}
,{ nombre: "Tlacuilo Santos", personas: "2", mesa: "A2"} 
,{ nombre: "Tlacuilo Diaz", personas: "5",  mesa: "A2"}
,{ nombre: "EMPTY", personas: "00", mesa: "00"}
,{ nombre: "Flores Vargas", personas: "4", mesa: "C3"}
,{ nombre: "Morales Juarez", personas: "4", mesa: "D2"}
,{ nombre: "Tapia Lozada", personas: "3", mesa: "E2"}
,{ nombre: "Goldring Ruiz", personas: "2", mesa: "D3"} 
,{ nombre: "Esperanza Balderas", personas: "1",  mesa: "D1"}
,{ nombre: "Bonifacia Bravo", personas: "2", mesa: "D4"}
,{ nombre: "Rubalcaba Baez", personas: "2", mesa: "E3"}
,{ nombre: "Canales Flores", personas: "3", mesa: "E5"}
,{ nombre: "Tlacuilo Miguel", personas: "3", mesa: "A2"} 
,{ nombre: "Molina Tlacuilo", personas: "2",  mesa: "B3"}
,{ nombre: "Espinoza Vazquez", personas: "3", mesa: "B1"}
,{ nombre: "Artur", personas: "1", mesa: "Personal"}
,{ nombre: "Canahuete Jimenez", personas: "3", mesa: "C3"}
,{ nombre: "Perez Ramos", personas: "5", mesa: "E1"} 
,{ nombre: "Michelle", personas: "0",  mesa: "En Linea"}
,{ nombre: "Calderon Velazquez", personas: "2", mesa: "E1"}
,{ nombre: "Soledad Castulo", personas: "5", mesa: "E6"}
,{ nombre: "Hernandez Tapia", personas: "2", mesa: "Principal"}
,{ nombre: "Tlacuilo Chabacano", personas: "3", mesa: "Principal"} 
,{ nombre: "Javier Frankis", personas: "4",  mesa: "B3"}
,{ nombre: "Karla Tendero", personas: "1", mesa: "A5"}
,{ nombre: "Jona y Joss", personas: "3", mesa: "E2"}
,{ nombre: "Jehu y Jesus Sanchez", personas: "2", mesa: "B4"}
,{ nombre: "EMPTY", personas: "0", mesa: "00"} 
,{ nombre: "Hugo Reynoso", personas: "3",  mesa: "D4"}
,{ nombre: "Gonzales Vazquez", personas: "2", mesa: "B4"}
,{ nombre: "Vazquez Medina", personas: "3", mesa: "B4"}
,{ nombre: "Luna", personas: "2", mesa: "D3"}
,{ nombre: "Jimenez", personas: "2", mesa: "D3"} 
,{ nombre: "Natalia Sanchez", personas: "1",  mesa: "A5"}
,{ nombre: "Quinto", personas: "2", mesa: "D4"}
,{ nombre: "Hernandez Torres", personas: "2", mesa: "A1"}
,{ nombre: "Hernandez Hernandez", personas: "4", mesa: "A1"}
,{ nombre: " ", personas: "0", mesa: "00"} 
,{ nombre: "Jesus Campos", personas: "1",  mesa: "A5"}
,{ nombre: "Hernandez Flores", personas: "4", mesa: "A1"}
,{ nombre: "Piz Steffanoni", personas: "5", mesa: "E3"}
,{ nombre: "Edgar Enriquez", personas: "2", mesa: "B3"}
,{ nombre: "EMPTY", personas: "0", mesa: "00"}
,{ nombre: "Perez Galeno", personas: "5", mesa: "D6"}
,{ nombre: "EMPTY", personas: "0", mesa: "00"}
,{ nombre: "Bertita", personas: "1", mesa: "B3"}
,{ nombre: "Dario Sanchez", personas: "1", mesa: "E3"}
,{ nombre: "Angeles Perez", personas: "2", mesa: "B4"}
,{ nombre: "Aurelio Castillo", personas: "1", mesa: "E3"}
,{ nombre: "Claudia Ibeth", personas: "4", mesa: "E5"}
,{ nombre: "Hernandez Ruiz", personas: "4", mesa: "B6"}
,{ nombre: "Hector Cuautle", personas: "2", mesa: "A6"}
,{ nombre: "Angel Canales", personas: "3", mesa: "E1"}
,{ nombre: "Monica Arroyo", personas: "1", mesa: "E3"}
,{ nombre: "EMPTY", personas: "0", mesa: "00"}
,{ nombre: "EMPTY", personas: "0", mesa: "00"}
,{ nombre: "EMPTY", personas: "0", mesa: "00"}
,{ nombre: "EMPTY", personas: "0", mesa: "00"}
,{ nombre: "EMPTY", personas: "0", mesa: "00"}
,{ nombre: "EMPTY", personas: "0", mesa: "00"}
,{ nombre: "Hernandez Juarez", personas: "4", mesa: "C1"}];
