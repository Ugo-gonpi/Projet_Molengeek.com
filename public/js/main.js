import * as INSTANCES from "./modules/instances.js"

import data from "./../json/molengeek.json" assert { type: "json" }


//Logo Molengeek dans la navBar

let logo = data.molengeekLogo

let img 

let logoNavbar = () => {
    img = document.createElement("img")
    img.src = logo
    document.querySelector(".logo").appendChild(img)
}

logoNavbar()

//Logo Molengeek dans le footer

let logoFooter = () => {
    img = document.createElement("img")
    img.src = logo
    document.querySelector(".logo2").appendChild(img)
}

logoFooter()

//Je récupere les résaux sociaux de Molengeek

let resaux = data.reseauxSociaux

console.log(resaux);

let a

let liens = () =>{
    for (let i = 0; i < resaux.length; i++) {
        a = document.createElement("a")
        a.href = resaux[i].href
        document.querySelector(".liens").appendChild(a)
    }
}

liens()

// Ici, je crée le carousel

// Object.values(data.partenaires).forEach(element => {
//     let item = document.createElement('div');
//     item.classList.add('item');
//     item.style.backgroundImage = `url(${element.logo})`;
//     document.querySelector(".carousel").appendChild(item);
// });
