const countryArray = {
    1: "Argentine",
    2: "Bolivie",
    3: "Brésil",
    4: "Chili",
    5: "Colombie",
    6: "Costa Rica",
    7: "Cuba",
    8: "Équateur",
    9: "Salvador",
    10: "Guatemala",
    11: "Haïti",
    12: "Honduras",
    13: "Mexique",
    14: "Nicaragua",
    15: "Panama",
    16: "Paraguay",
    17: "Pérou",
    18: "République dominicaine",
    19: "Uruguay",
    20: "Venezuela"
};

const capitalArray = {
    1: "Buenos Aires",          // Argentine
    2: "Sucre",                // Bolivie
    3: "Brasília",             // Brésil
    4: "Santiago",             // Chili
    5: "Bogotá",               // Colombie
    6: "San José",             // Costa Rica
    7: "La Havane",            // Cuba
    8: "Quito",                // Équateur
    9: "San Salvador",         // Salvador
    10: "Guatemala",           // Guatemala
    11: "Port-au-Prince",      // Haïti
    12: "Tegucigalpa",         // Honduras
    13: "Mexico",              // Mexique
    14: "Managua",             // Nicaragua
    15: "Panama",              // Panama
    16: "Asunción",            // Paraguay
    17: "Lima",                // Pérou
    18: "Saint-Domingue",      // République dominicaine
    19: "Montevideo",          // Uruguay
    20: "Caracas"              // Venezuela
};

let points = 0;
const jeuxContinue = () =>{
    const country = document.getElementById("country");
    let rdm1 = Math.floor(Math.random()*20)+1;
    country.textContent = capitalArray[`${rdm1}`];
    let rep = Math.ceil(Math.random()*3);
    for (var i = 1 ; i<=3 ; i++){
    if (i == rep){
        const choix = document.querySelector(".choix");
        const btn = document.createElement("button");
        btn.textContent = countryArray[`${rdm1}`];
        choix.appendChild(btn);
    }
    else{
        let rdm2 = Math.floor(Math.random()*20)+1;
        const choix = document.querySelector(".choix");
        const btn = document.createElement("button");
        btn.textContent = countryArray[`${rdm2}`];
        choix.appendChild(btn);
    }
}

const btns = document.querySelectorAll("button");
btns.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        const point = document.querySelector(".point");
        const choix = document.querySelector(".choix");
        if(btn.textContent===countryArray[`${rdm1}`]){
            points+= 10;
            point.textContent = points + " point(s)"
            //setTimeout(jeuxContinue , 1000);
        }
        else{
            points-= 10;
            //btn.style.background ="red"
            point.textContent = points +"points"
            //setTimeout(jeuxContinue , 2000); 
        }
        choix.innerHTML = "";
        jeuxContinue();
    })
})
}
jeuxContinue();