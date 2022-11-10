import { getPets } from "../../script/homePage-logged-requests.js"
import { adoptions } from "../../script/Requisicoes/Adoptions/POST.js"

const pets = await getPets()

export function redirect () {
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

export function openModalAdopt () {
    const body = document.querySelector('body')
    const modalBackground = document.createElement('div')
    const modalContent = document.createElement('div')
    const closeModal = document.createElement('img')
    const h3 = document.createElement('h3')

    modalBackground.classList.add('bg_modal')
    modalContent.classList.add('modal_adopt')
    closeModal.classList.add('close')

    closeModal.src = '/assets/closeMenu.png'
    h3.innerText = 'Pet adotado!'

    modalBackground.addEventListener("click", (event) => {
        const {className} = event.target
        if(className === "modal" || className === 'close'){
            modalBackground.remove()
        }
    })

    body.appendChild(modalBackground)
    modalBackground.appendChild(modalContent)
    modalContent.append(closeModal, h3)
}

showPetCard (pets)
redirect ()