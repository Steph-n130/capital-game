const countryArray = {
    1: "Canada",
    2: "États-Unis",
    3: "Belize",
    4: "Costa Rica",
    5: "Salvador",
    6: "Guatemala",
    7: "Honduras",
    8: "Nicaragua",
    9: "Panama",
    10: "Antigua-et-Barbuda",
    11: "Bahamas",
    12: "Barbade",
    13: "Cuba",
    14: "Dominique",
    15: "Grenade",
    16: "Haïti",
    17: "Jamaïque",
    18: "République dominicaine",
    19: "Saint-Christophe-et-Niévès",
    20: "Sainte-Lucie",
    21: "Saint-Vincent-et-les-Grenadines",
    22: "Trinité-et-Tobago"
};

const capitalArray = {
    1: "Ottawa",            // Canada
    2: "Washington",        // États-Unis
    3: "Belmopan",          // Belize
    4: "San José",          // Costa Rica
    5: "San Salvador",      // Salvador
    6: "Guatemala",         // Guatemala
    7: "Tegucigalpa",       // Honduras
    8: "Managua",           // Nicaragua
    9: "Panama",            // Panama
    10: "Saint John's",     // Antigua-et-Barbuda
    11: "Nassau",           // Bahamas
    12: "Bridgetown",       // Barbade
    13: "La Havane",        // Cuba
    14: "Roseau",           // Dominique
    15: "Saint George's",   // Grenade
    16: "Port-au-Prince",   // Haïti
    17: "Kingston",         // Jamaïque
    18: "Saint-Domingue",   // République dominicaine
    19: "Basseterre",       // Saint-Christophe-et-Niévès
    20: "Castries",         // Sainte-Lucie
    21: "Kingstown",        // Saint-Vincent-et-les-Grenadines
    22: "Port-d'Espagne"    // Trinité-et-Tobago
};
let points = 0;
const jeuxContinue = () =>{
    const country = document.getElementById("country");
    let rdm1 = Math.floor(Math.random()*22)+1;
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
        let rdm2 = Math.floor(Math.random()*22)+1;
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