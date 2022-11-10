import { getPets } from "../../script/homePage-logged-requests.js"
import { adoptions } from "../../script/Requisicoes/Adoptions/POST.js"

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
    if (obj.available_for_adoption == true) {
        adoptBtn.classList.add('available')
        adoptBtn.innerText = 'Me adota?'
    } else if (obj.available_for_adoption == false) {
        adoptBtn.classList.add('notAvailable') 
        adoptBtn.innerText = 'Adotado'
    }

    card.append(imgCard,titleCard,pet,adoptBtn)

    adoptBtn.addEventListener('click', async () => {
        const body = {
            pet_id: obj.id
        }
        await adoptions(body)
    })

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