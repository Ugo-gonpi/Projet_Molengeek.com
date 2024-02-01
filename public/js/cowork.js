
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

let count = 0

let liens = () =>{
    for (const key in resaux) {
        if (Object.hasOwnProperty.call(resaux, key)) {
            const element = resaux[key];
            document.querySelectorAll(".resaux")[count].href = element
            count += 1
        }
    }
}

liens()

//Info contact

let infoMolen = data.molengeekInfo

let info = () => {
    for (const key in infoMolen) {
        if (Object.hasOwnProperty.call(infoMolen, key)) {
            const element = infoMolen[key];
            let p = document.createElement("p")
            p.innerText = element
            document.querySelector(".contactUs").appendChild(p)
        }
    }
}

info()
