
const countryArray = {
    1: "Afrique du Sud",
    2: "Algérie",
    3: "Angola",
    4: "Bénin",
    5: "Botswana",
    6: "Burkina Faso",
    7: "Burundi",
    8: "Cameroun",
    9: "Cap-Vert",
    10: "République centrafricaine",
    11: "Comores",
    12: "République démocratique du Congo",
    13: "République du Congo",
    14: "Côte d'Ivoire",
    15: "Djibouti",
    16: "Égypte",
    17: "Érythrée",
    18: "Eswatini",
    19: "Éthiopie",
    20: "Gabon",
    21: "Gambie",
    22: "Ghana",
    23: "Guinée",
    24: "Guinée-Bissau",
    25: "Guinée équatoriale",
    26: "Kenya",
    27: "Lesotho",
    28: "Liberia",
    29: "Libye",
    30: "Madagascar",
    31: "Malawi",
    32: "Mali",
    33: "Maroc",
    34: "Maurice",
    35: "Mauritanie",
    36: "Mozambique",
    37: "Namibie",
    38: "Niger",
    39: "Nigeria",
    40: "Ouganda",
    41: "Rwanda",
    42: "Sao Tomé-et-Principe",
    43: "Sénégal",
    44: "Seychelles",
    45: "Sierra Leone",
    46: "Somalie",
    47: "Soudan",
    48: "Soudan du Sud",
    49: "Tanzanie",
    50: "Tchad",
    51: "Togo",
    52: "Tunisie",
    53: "Zambie",
    54: "Zimbabwe"
};

const capitalArray = {
    1: "Pretoria",                // Afrique du Sud
    2: "Alger",                   // Algérie
    3: "Luanda",                  // Angola
    4: "Porto-Novo",              // Bénin
    5: "Gaborone",                // Botswana
    6: "Ouagadougou",             // Burkina Faso
    7: "Gitega",                  // Burundi
    8: "Yaoundé",                 // Cameroun
    9: "Praia",                   // Cap-Vert
    10: "Bangui",                 // République centrafricaine
    11: "Moroni",                 // Comores
    12: "Kinshasa",               // République démocratique du Congo
    13: "Brazzaville",            // République du Congo
    14: "Yamoussoukro",           // Côte d'Ivoire
    15: "Djibouti",               // Djibouti
    16: "Le Caire",               // Égypte
    17: "Asmara",                 // Érythrée
    18: "Mbabane",                // Eswatini
    19: "Addis-Abeba",            // Éthiopie
    20: "Libreville",             // Gabon
    21: "Banjul",                 // Gambie
    22: "Accra",                  // Ghana
    23: "Conakry",                // Guinée
    24: "Bissau",                 // Guinée-Bissau
    25: "Malabo",                 // Guinée équatoriale
    26: "Nairobi",                // Kenya
    27: "Maseru",                 // Lesotho
    28: "Monrovia",               // Liberia
    29: "Tripoli",                // Libye
    30: "Antananarivo",           // Madagascar
    31: "Lilongwe",               // Malawi
    32: "Bamako",                 // Mali
    33: "Rabat",                  // Maroc
    34: "Port-Louis",             // Maurice
    35: "Nouakchott",             // Mauritanie
    36: "Maputo",                 // Mozambique
    37: "Windhoek",               // Namibie
    38: "Niamey",                 // Niger
    39: "Abuja",                  // Nigeria
    40: "Kampala",                // Ouganda
    41: "Kigali",                 // Rwanda
    42: "São Tomé",               // Sao Tomé-et-Principe
    43: "Dakar",                  // Sénégal
    44: "Victoria",               // Seychelles
    45: "Freetown",               // Sierra Leone
    46: "Mogadiscio",             // Somalie
    47: "Khartoum",               // Soudan
    48: "Djouba",                 // Soudan du Sud
    49: "Dodoma",                 // Tanzanie
    50: "N'Djamena",              // Tchad
    51: "Lomé",                   // Togo
    52: "Tunis",                  // Tunisie
    53: "Lusaka",                 // Zambie
    54: "Harare"                  // Zimbabwe
};

let points = 0;
const jeuxContinue = () =>{
    const country = document.getElementById("country");
    let rdm1 = Math.floor(Math.random()*54)+1;
    country.textContent = countryArray[`${rdm1}`];
    let rep = Math.ceil(Math.random()*3);
    for (var i = 1 ; i<=3 ; i++){
    if (i == rep){
        const choix = document.querySelector(".choix");
        const btn = document.createElement("button");
        btn.textContent = capitalArray[`${rdm1}`];
        choix.appendChild(btn);
    }
    else{
        let rdm2 = Math.floor(Math.random()*54)+1;
        const choix = document.querySelector(".choix");
        const btn = document.createElement("button");
        btn.textContent = capitalArray[`${rdm2}`];
        choix.appendChild(btn);
    }
}

const btns = document.querySelectorAll("button");
btns.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        const point = document.querySelector(".point");
        const choix = document.querySelector(".choix");
        if(btn.textContent===capitalArray[`${rdm1}`]){
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