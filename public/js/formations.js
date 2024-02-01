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

//Ici on récupere les questions et les réponse

// let questions = data.FAQ

// let count2 = 0


// let quesReponse = () => {
//     for (const key in questions) {
//         if (Object.hasOwnProperty.call(questions, key)) {
//             const element = questions[key];
//             let h3 = document.createElement("h3")
//             let p = document.createElement("p")
//             h3.innerText = element.question
//             p.innerText = element.reponse
//             count2 += 1
//         }
//     }
// }

//Ici je récupere les temoignages

// let testimonials1 = data.videosTemoignage.videoI

// let testimonials2 = data.videosTemoignage.videoII

let temoin1 = document.querySelector(".video1")

let temoin2 = document.querySelector(".video2")

temoin1.src = data.videosTemoignage.videoI

temoin2.src = data.videosTemoignage.videoII