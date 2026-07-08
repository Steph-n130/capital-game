const capitalArray = {
    1: "Tirana",
    2: "Andorre-la-Vieille",
    3: "Vienne",
    4: "Minsk",
    5: "Bruxelles",
    6: "Sarajevo",
    7: "Sofia",
    8: "Zagreb",
    9: "Nicosie",
    10: "Prague",
    11: "Copenhague",
    12: "Tallinn",
    13: "Helsinki",
    14: "Paris",
    15: "Berlin",
    16: "Athènes",
    17: "Budapest",
    18: "Reykjavik",
    19: "Dublin",
    20: "Rome",
    21: "Riga",
    22: "Vaduz",
    23: "Vilnius",
    24: "Luxembourg",
    25: "La Valette",
    26: "Chisinau",
    27: "Monaco",
    28: "Podgorica",
    29: "Amsterdam",
    30: "Skopje",
    31: "Oslo",
    32: "Varsovie",
    33: "Lisbonne",
    34: "Bucarest",
    35: "Moscou",
    36: "Saint-Marin",
    37: "Belgrade",
    38: "Bratislava",
    39: "Ljubljana",
    40: "Madrid",
    41: "Stockholm",
    42: "Berne",
    43: "Kyiv",
    44: "Londres",
    45: "Le Vatican"
};

const countryArray = {
    1: "Albanie",
    2: "Andorre",
    3: "Autriche",
    4: "Biélorussie",
    5: "Belgique",
    6: "Bosnie-Herzégovine",
    7: "Bulgarie",
    8: "Croatie",
    9: "Chypre",
    10: "République tchèque",
    11: "Danemark",
    12: "Estonie",
    13: "Finlande",
    14: "France",
    15: "Allemagne",
    16: "Grèce",
    17: "Hongrie",
    18: "Islande",
    19: "Irlande",
    20: "Italie",
    21: "Lettonie",
    22: "Liechtenstein",
    23: "Lituanie",
    24: "Luxembourg",
    25: "Malte",
    26: "Moldavie",
    27: "Monaco",
    28: "Monténégro",
    29: "Pays-Bas",
    30: "Macédoine du Nord",
    31: "Norvège",
    32: "Pologne",
    33: "Portugal",
    34: "Roumanie",
    35: "Russie",
    36: "Saint-Marin",
    37: "Serbie",
    38: "Slovaquie",
    39: "Slovénie",
    40: "Espagne",
    41: "Suède",
    42: "Suisse",
    43: "Ukraine",
    44: "Royaume-Uni",
    45: "Vatican"
};

let points = 0;
const jeuxContinue = () =>{
    const country = document.getElementById("country");
    let rdm1 = Math.floor(Math.random()*45)+1;
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
        let rdm2 = Math.floor(Math.random()*45)+1;
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
            point.textContent = points + " point(s)";
        }
        else{
            points-= 10;
            point.textContent = points +"points";
        }
        choix.innerHTML = "";
        jeuxContinue();
    })
})
}
jeuxContinue();