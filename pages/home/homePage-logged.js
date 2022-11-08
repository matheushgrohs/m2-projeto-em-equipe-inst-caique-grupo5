import { getPets } from "../../script/homePage-logged-requests.js"

const pets = await getPets()

function redirect () {
    const profileBtn = document.querySelector('.profileBtn')
    const logoutBtn = document.querySelector('.logoutBtn')
    const token = localStorage.getItem('token')
    profileBtn.addEventListener('click', () => {
        window.location.assign("/pages/profile/profile.html")
    })
    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('token')
        window.location.assign('/pages/home/homePage-noLogin.html')
    })
    if (!token) {
        window.location.assign('/pages/home/homePage-noLogin.html')
    }
}

function createPetCard (obj) {
    const card = document.createElement('li')
    const imgCard = document.createElement('img')
    const titleCard = document.createElement('h2')
    const pet = document.createElement('p')
    const adoptBtn = document.createElement('button')

    imgCard.src = obj.avatar_url
    titleCard.innerText = obj.name
    pet.innerText = obj.species
    adoptBtn.innerText = 'Me adota?'

    card.append(imgCard,titleCard,pet,adoptBtn)

    return card
}


function showPetCard (array) {
    const ul = document.querySelector('ul')
    array.forEach(element => {
        const petCard = createPetCard (element)
        ul.appendChild(petCard)
    });
}

showPetCard (pets)
redirect ()