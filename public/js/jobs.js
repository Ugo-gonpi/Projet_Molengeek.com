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



let liens = () =>{
    for (const key in resaux) {
        if (Object.hasOwnProperty.call(resaux, key)) {
            const element = resaux[key];
            let a = document.createElement("a")
            a.href = element
            document.querySelector(".liens").appendChild(a)
        }
    }
}


liens()

//Ici on récupere les differenst jobs

let jobs = data.jobs

let cont2 = 0

let lesJobs = () => {
    for (const key in jobs) {
        if (Object.hasOwnProperty.call(jobs, key)) {
            const element = jobs[key];
            let h3 = document.createElement("h3")
            let p = document.createElement("p")
            h3.innerText = element.poste
            p.innerText = element.description
            document.querySelectorAll(".range1")[cont2].appendChild(h3)
            document.querySelectorAll(".range1")[cont2].appendChild(p)
            cont2 += 1
        }
    }
}

lesJobs()