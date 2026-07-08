const countryArray = {
    1: "Afghanistan",
    2: "Arabie saoudite",
    3: "Arménie",
    4: "Azerbaïdjan",
    5: "Bahreïn",
    6: "Bangladesh",
    7: "Bhoutan",
    8: "Brunéi",
    9: "Cambodge",
    10: "Chine",
    11: "Corée du Nord",
    12: "Corée du Sud",
    13: "Émirats arabes unis",
    14: "Géorgie",
    15: "Inde",
    16: "Indonésie",
    17: "Irak",
    18: "Iran",
    19: "Israël",
    20: "Japon",
    21: "Jordanie",
    22: "Kazakhstan",
    23: "Koweït",
    24: "Kirghizistan",
    25: "Laos",
    26: "Liban",
    27: "Malaisie",
    28: "Maldives",
    29: "Mongolie",
    30: "Myanmar",
    31: "Népal",
    32: "Oman",
    33: "Ouzbékistan",
    34: "Pakistan",
    35: "Philippines",
    36: "Qatar",
    37: "Singapour",
    38: "Sri Lanka",
    39: "Syrie",
    40: "Tadjikistan",
    41: "Taïlande",
    42: "Timor oriental",
    43: "Turkménistan",
    44: "Turquie",
    45: "Viêt Nam",
    46: "Yémen",
    47: "Australie",
    48: "Fidji",
    49: "Kiribati",
    50: "Îles Marshall",
    51: "Micronésie",
    52: "Nauru",
    53: "Nouvelle-Zélande",
    54: "Palaos",
    55: "Papouasie-Nouvelle-Guinée",
    56: "Samoa",
    57: "Îles Salomon",
    58: "Tonga",
    59: "Tuvalu",
    60: "Vanuatu"
};

const capitalArray = {
    1: "Kaboul",
    2: "Riyad",
    3: "Erevan",
    4: "Bakou",
    5: "Manama",
    6: "Dacca",
    7: "Thimphou",
    8: "Bandar Seri Begawan",
    9: "Phnom Penh",
    10: "Pékin",
    11: "Pyongyang",
    12: "Séoul",
    13: "Abou Dabi",
    14: "Tbilissi",
    15: "New Delhi",
    16: "Jakarta",
    17: "Bagdad",
    18: "Téhéran",
    19: "Jérusalem",
    20: "Tokyo",
    21: "Amman",
    22: "Astana",
    23: "Koweït",
    24: "Bichkek",
    25: "Vientiane",
    26: "Beyrouth",
    27: "Kuala Lumpur",
    28: "Malé",
    29: "Oulan-Bator",
    30: "Naypyidaw",
    31: "Katmandou",
    32: "Mascate",
    33: "Tachkent",
    34: "Islamabad",
    35: "Manille",
    36: "Doha",
    37: "Singapour",
    38: "Sri Jayawardenapura Kotte",
    39: "Damas",
    40: "Douchanbé",
    41: "Bangkok",
    42: "Dili",
    43: "Achgabat",
    44: "Ankara",
    45: "Hanoï",
    46: "Sanaa",
    47: "Canberra",
    48: "Suva",
    49: "Tarawa-Sud",
    50: "Majuro",
    51: "Palikir",
    52: "Yaren",
    53: "Wellington",
    54: "Ngerulmud",
    55: "Port Moresby",
    56: "Apia",
    57: "Honiara",
    58: "Nuku'alofa",
    59: "Funafuti",
    60: "Port-Vila"
};

let points = 0;
const jeuxContinue = () =>{
    const country = document.getElementById("country");
    let rdm1 = Math.floor(Math.random()*60)+1;
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
        let rdm2 = Math.floor(Math.random()*60)+1;
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