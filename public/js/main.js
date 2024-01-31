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

let a

let liens = () =>{
    for (const key in resaux) {
        if (Object.hasOwnProperty.call(resaux, key)) {
            a = document.createElement("a")
            a.href = key
            document.querySelector(".liens").appendChild(a)
        }
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


//Ici on récupere l'info de molengeek

// let infoMolen = data.molengeekInfo

// let divInfo = document.querySelector(".contactInfo")

// divInfo.innerHTML = `
//     <h1>N'hésitez pas a nous contacter</h1>
//     <p>${infoMolen.name}</p>
//     <p>${infoMolen.address}</p>
//     <p>${infoMolen.email}</p>
//     <p>${infoMolen.phone}</p>
//     <p>${infoMolen.tva}</p>
// `

//Ici on récupere les séances d'informations

// let seances = data.formations.seancesInfos

// let seancesInfos1 = () =>{
//     for (const key in seances) {
//         if (Object.hasOwnProperty.call(seances, key)) {
//             let p = document.createElement("p")
//             p.innerText = key
//             document.querySelector(".infos1").appendChild(p)
//         }
//     }
// }

// seancesInfos1()

// let seancesInfos2 = () =>{
//     for (const key in seances) {
//         if (Object.hasOwnProperty.call(seances, key)) {
//             let p = document.createElement("p")
//             p.innerText = key
//             document.querySelector(".infos2").appendChild(p)
//         }
//     }
// }

// seancesInfos2()