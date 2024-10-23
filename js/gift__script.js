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
    qrId = numberId / 3 -1428;
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
            let pases = invitados[qrId]['baile']
        
            let qrText =`Fam: ${nombre}, Pases: ${personas}, Mesa: ${mesa}, Pase baile ${pases}`;
            let confirmar = confirm(`¿Confirmar ${number} como numero de invitacion?`);
            if (confirmar) {
                confirmInfo.removeChild(sendButton);
                qrContainerStyle.classList.add("anim-qr");
                QR.makeCode(qrText);
                if (pases == '0') {
                    let newHtmlCodeFam = `
                    <h3> ${nombre}</h3>
                    <h5>Tu mesa es <span class="span-text-modal">${mesa}</span> </h5>
                    <h5>Tienes: <span class="span-text-modal">${personas}</span> pases</h5>`;
                confirmarFamilia.innerHTML += newHtmlCodeFam;
                } if (pases != '0') {
                    let newHtmlCodeFam = `
                    <h3> ${nombre}</h3>
                    <h5>Tu mesa es <span class="span-text-modal">${mesa}</span> </h5>
                    <h5>Tienes: <span class="span-text-modal">${personas}</span> pases</h5>
                    <h5>Tus pases para el baile son: <span class="span-text-modal">${pases}</span><h5/>
                    <h4>Recuerda que la entrada al baile es 5:30 pm<h4/>`;
                    confirmarFamilia.innerHTML += newHtmlCodeFam;
                }
                
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
            let pases = invitados[qrId]['baile'];
        
            let qrText =`Fam: ${nombre}, Pases: ${personas}, Mesa: ${mesa}, baile: ${pases}`;
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
/*
for (let i = 0; i <= 100; i++) {
    let loc = (1428 + i) * 3 ;
    document.write(loc + `<br>`)
}*/

// for (let i = 0; i <= invitados.length; i++) {
//     let loc = (1237 + i) * 4 ;
//     let nombre = invitados[i]["nombre"]
//     let inv = invitados[i]["personas"]
//     let mesa = invitados[i]["mesa"]
    
    
//     document.write(loc + ' ' + nombre + '   <b>Pases: </b>' + inv + '   <b>mesa: </b>' + mesa + `<br>`)
// }


const invitados = [{nombre: "Concha Mendez", personas: "3", mesa: "1", baile: "5"}   
,{nombre: "Garcia Visencio", personas: "4", mesa: "1", baile: "6"}
,{ nombre: "Gonzalez Rivera", personas: "3", mesa: "1" , baile: "3"}
,{ nombre: "Campos Ruiz", personas: "5", mesa: "2", baile: "5"}
,{ nombre: "Ruiz Garcia", personas: "2", mesa: "2", baile: "0"}
,{ nombre: "Ruiz Flores", personas: "2", mesa: "2", baile: "0"}
,{ nombre: "Vergara Concha", personas: "2", mesa: "3", baile: "0"} 
,{ nombre: "Barela Concha", personas: "4",  mesa: "3", baile: "0"}
,{ nombre: "Ruben Concha", personas: "1", mesa: "3", baile: "0"}
,{ nombre: "Rosario Rivera", personas: "1", mesa: "3", baile: "0"}
,{ nombre: "Soledad Rivera", personas: "1", mesa: "3", baile: "0"}
,{ nombre: "Felipa Morales", personas: "1", mesa: "3", baile: "0"}
,{ nombre: "Campos Fierro", personas: "5", mesa: "4", baile: "0"} 
,{ nombre: "Campos Palacio", personas: "4",  mesa: "4", baile: "0"}
,{ nombre: "Lore Merino", personas: "2", mesa: "5", baile: "0"}
,{ nombre: "Hernandez Ruiz", personas: "4", mesa: "5", baile: "0"}
,{ nombre: "Veronica Coronel", personas: "2", mesa: "5", baile: "0"}
,{ nombre: "Manuel De Jesus", personas: "2", mesa: "5", baile: "0"}
,{ nombre: "Delgado Vazquez", personas: "2", mesa: "6", baile: "0"} 
,{ nombre: "Hernandez Perez", personas: "3", mesa: "6", baile: "0"} 
,{ nombre: "Flores Serrano", personas: "2",  mesa: "6", baile: "0"}
,{ nombre: "Fierro Fierro", personas: "3", mesa: "4 y 6", baile: "0"}
,{ nombre: "Flores Infante", personas: "2", mesa: "7", baile: "0"}
,{ nombre: "Conchita Infante", personas: "2", mesa: "7", baile: "4"}
,{ nombre: "Jimenez Vidals", personas: "3", mesa: "7", baile: "0"}
,{ nombre: "Rosas Madeline", personas: "3", mesa: "7", baile: "2"}
,{ nombre: "Flores Sanchez", personas: "4",  mesa: "8", baile: "0"}
,{ nombre: "Calderon", personas: "3", mesa: "8", baile: "0"}
,{ nombre: "Flores Santos", personas: "2", mesa: "8", baile: "4"}
,{ nombre: "Raquel Flores", personas: "1", mesa: "8", baile: "0"}
,{ nombre: "Paulino Montalvo", personas: "1", mesa: "9", baile: "0"}
,{ nombre: "Abraham Mendez", personas: "1", mesa: "9", baile: "0"} 
,{ nombre: "Barranco", personas: "3",  mesa: "9", baile: "0"}
,{ nombre: "Sara Mendez", personas: "1", mesa: "9", baile: "0"}
,{ nombre: "America Martinez", personas: "2", mesa: "9", baile: "3"}
,{ nombre: "Monica y Agustin", personas: "2", mesa: "9", baile: "0"}
,{ nombre: "Tepepa Flores", personas: "2", mesa: "10", baile: "0"}
,{ nombre: "Garcia", personas: "2", mesa: "10", baile: "0"} 
,{ nombre: "Soledad Romero", personas: "2",  mesa: "10", baile: "0"}
,{ nombre: "Castro Gutierrez", personas: "4", mesa: "10", baile: "0"}
,{ nombre: "Romero Rodriguez", personas: "2", mesa: "11", baile: "0"}
,{ nombre: "Vargas Romero", personas: "2", mesa: "11", baile: "0"}
,{ nombre: "Martinez Perez", personas: "6", mesa: "11", baile: "2"}
,{ nombre: "Guerra Lopez", personas: "5", mesa: "12", baile: "10"} 
,{ nombre: "Vega Lopez", personas: "1",  mesa: "12", baile: "0"}
,{ nombre: "Allende Solano", personas: "2", mesa: "12", baile: "0"}
,{ nombre: "Torres Medel", personas: "2", mesa: "12", baile: "0"}
,{ nombre: "Mantilla Larios", personas: "7", mesa: "13", baile: "0"}
,{ nombre: "Miriam Morales", personas: "3", mesa: "13", baile: "3"}
,{ nombre: "Ramirez Hernandez", personas: "2", mesa: "14", baile: "8"} 
,{ nombre: "Rodriguez Hernandez", personas: "3",  mesa: "14", baile: "0"}
,{ nombre: "Hernandez Tlacuilo", personas: "4", mesa: "14", baile: "7"}
,{ nombre: "Oscar Garin", personas: "1", mesa: "14", baile: "0"}
,{ nombre: "Gonzalez", personas: "4", mesa: "15", baile: "0"}
,{ nombre: "Ahuehuetl", personas: "4", mesa: "15", baile: "0"}
,{ nombre: "Leon Quintero", personas: "2", mesa: "15", baile: "3"} 
,{ nombre: "Hurtado Miranda", personas: "2",  mesa: "16", baile: "0"}
,{ nombre: "Torres Guerra", personas: "2", mesa: "16", baile: "0"}
,{ nombre: "Garcia Sanchez", personas: "5", mesa: "16", baile: "0"}
,{ nombre: "Eva Flores", personas: "1", mesa: "16", baile: "0"}
,{ nombre: "Remigio Gallegos", personas: "2", mesa: "17", baile: "0"}
,{ nombre: "Rosamaria", personas: "2", mesa: "17", baile: "0"} 
,{ nombre: "Walter", personas: "2",  mesa: "17", baile: "0"}
,{ nombre: "Concepcion Carbente", personas: "1", mesa: "22", baile: "0"}
,{ nombre: "Hidalgo", personas: "3", mesa: "17", baile: "0"}
,{ nombre: "Flores Tapia", personas: "5", mesa: "18", baile: "0"}
,{ nombre: "Rocha Tapia", personas: "3", mesa: "18", baile: "0"}
,{ nombre: "Tendero Quintero", personas: "2", mesa: "18", baile: "0"} 
,{ nombre: "Roque Ortega", personas: "3",  mesa: "19", baile: "0"}
,{ nombre: "Tepepa Xique", personas: "2", mesa: "19", baile: "2"}
,{ nombre: "Tellez", personas: "5", mesa: "19", baile: "0"}
,{ nombre: "Torres Tapia", personas: "4", mesa: "20", baile: "5"}
,{ nombre: "Mireya Campos", personas: "3", mesa: "20", baile: "0"} 
,{ nombre: "Rivera Perez", personas: "3",  mesa: "20", baile: "0"}
,{ nombre: "Lucia", personas: "1", mesa: "21", baile: "0"}
,{ nombre: "Martinez Sanchez", personas: "2", mesa: "21", baile: "0"}
,{ nombre: "Jabin Leon", personas: "2", mesa: "21", baile: "0"}
,{ nombre: "Sanchez Bravo", personas: "2", mesa: "21", baile: "0"} 
,{ nombre: "Angel Cardozo", personas: "1",  mesa: "22", baile: "0"}
,{ nombre: "Najera Leon", personas: "2", mesa: "22", baile: "0"}
,{ nombre: "Jonathan Martinez", personas: "2", mesa: "22", baile: "0"}
,{ nombre: "Rojas Arellano", personas: "3", mesa: "22", baile: "0"}
,{ nombre: "Clara Sanchez", personas: "1", mesa: "22", baile: "0"}
,{ nombre: "Hoyos", personas: "2", mesa: "6", baile: "0"}
,{ nombre: "Navarrete Rendon", personas: "2", mesa: "10", baile: "0"}
,{ nombre: "Hernandez Mendez ", personas: "4", mesa: "17", baile: "2"}
,{ nombre: "EMPTY", personas: "0", mesa: "00", baile: "0"}
,{ nombre: "EMPTY", personas: "0", mesa: "00", baile: "0"}
,{ nombre: "EMPTY", personas: "0", mesa: "00", baile: "0"}
];
