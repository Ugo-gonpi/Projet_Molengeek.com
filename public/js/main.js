import * as INSTANCES from "./modules/instances.js"

import data from "./../json/molengeek.json" assert { type: "json" }

let logo = data.molengeekLogo

let img 

let molenLogo = () => {
    img = document.createElement("img")
    img.src = logo
    document.querySelector(".logo").appendChild(img)
}

molenLogo()

let resaux = data.reseauxSociaux

let a

let liens = () =>{
    for (let i = 0; i < resaux.length; i++) {
        a = document.createElement("a")
        a.href = resaux[i]
        document.querySelector(".liens").appendChild(a)
    }
}

liens()
