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

// Ici je prends les logos des partenaires

let logosPart = data.partenaires


let cont = 0

let partenaires = () =>{
    for (const key in logosPart) {
        if (Object.hasOwnProperty.call(logosPart, key)) {
            const element = logosPart[key];
            let img = document.createElement("img")
            img.src = element.logo
            document.querySelectorAll(".carousel-item")[cont].appendChild(img)
            img.style.width = "200px"
            cont += 1
        }
    }
}
    
partenaires()

//Ici on récupere les événements a venir 

let avenir = data.formations.seancesInfos

let cont1 = 0

let evenements = () => {
    for (const key in avenir) {
        if (Object.hasOwnProperty.call(avenir, key)) {
            const element = avenir[key];
            let h6 = document.createElement("h4")
            let p = document.createElement("p")
            h6.innerText = element.date
            p.innerText = element.nom
            document.querySelectorAll(".seances")[cont1].appendChild(h6)
            document.querySelectorAll(".seances")[cont1].appendChild(p)
            cont1 += 1
        }
    }
}

evenements()


//Ici on récupere l'info de molengeek

let infoMolen = data.molengeekInfo

let infoHome = () => {
    for (const key in infoMolen) {
        if (Object.hasOwnProperty.call(infoMolen, key)) {
            const element = infoMolen[key];
            let p = document.createElement("p")
            p.innerText = element
            document.querySelector(".contact").appendChild(p)
        }
    }
}

infoHome()

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