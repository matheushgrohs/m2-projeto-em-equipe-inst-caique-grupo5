import { getLocal } from "../../script/LocalStorage/localStorage.js";
import openModal from "../../script/modal.js";
import { UpdatePetById } from "../../script/Requisicoes/Pets/PATCH.js";
import { CreatePet } from "../../script/Requisicoes/Pets/POST.js";
import { DeleteProfile } from "../../script/Requisicoes/Users/DELETE.js";
import { ReadProfile } from "../../script/Requisicoes/Users/GET.js";
import { UpdateProfile } from "../../script/Requisicoes/Users/PATCH.js";



const especies = ["Cachorro", "Gato", "Aves", "Repteis", "Outros"];
const user = await ReadProfile();
const pets = await ReadProfile()

export async function userProfile(obj){
    const containerImg = document.querySelector('#img-user-container')
    const containerUserContainer = document.querySelector('#user-container')
    
    let img = document.createElement('img')
        img.src=obj.avatar_url
    
    let containerData = document.createElement('div')
        containerData.id='data-user-container'
    let data = document.createElement('div')
        data.id='data'
    let h2 = document.createElement('h2')
        h2.classList.add('font1-purple')
        h2.innerText='Dados Pessoais'
    
    let h3Name = document.createElement('h3')
        h3Name.classList.add('font3-black-bold-reverse')
    let spanName = document.createElement('span')
        spanName.innerText='Nome:'
        spanName.classList.add('font3-purple-bold')
        h3Name.innerText= obj.name
        h3Name.append(spanName)

    let h3email = document.createElement('h3')
        h3email.classList.add('font3-black-bold-reverse')
    let spanEmail = document.createElement('span')
        spanEmail.innerText='Email:'
        spanEmail.classList.add('font3-purple-bold')
        h3email.innerText=obj.email
        h3email.appendChild(spanEmail)

    let btnContainer = document.createElement('div')
        btnContainer.id='btn-data-user-container'
    let btnDadosPerfil = document.createElement('button')
        btnDadosPerfil.classList.add('btn_type1_light')
        btnDadosPerfil.classList.add('modal_dados_perfil')
        btnDadosPerfil.innerText='Atualizar informações'
        btnDadosPerfil.addEventListener("click", () => {
            
            const conteudo = `<h2>Atualizar perfil</h2>
              <form class = "modal_mid_form">
                  <input type="text" value="${user.name}" id="name" placeholder="Nome">
                  <input type="text" value="${user.avatar_url}" id="avatar_url" placeholder="Avatar">
                  <button class="btn_type1">Atualizar</button>
              </form>
              `;
            openModal(conteudo);
            const form = document.querySelector("form");
            const element = [...form.elements];
          
            form.addEventListener("submit", async (event) => {
              event.preventDefault();
              const data = {};
              element.forEach((e) => {
                if (e.tagName == "INPUT") {
                  data[e.id] = e.value;
                }
              });
              UpdateProfile(data);
            });
          });

    let btnDelPerfil = document.createElement('button')
        btnDelPerfil.classList.add('btn_type2_light')
        btnDelPerfil.classList.add('modal_deletar_perfil')
        btnDelPerfil.innerText='Deletar conta'
        btnDelPerfil.addEventListener("click", () => {
            const conteudo = `<h2>Deseja mesmo deletar sua conta?</h2>
              <button class="btn_type1">Não quero deletar minha conta</button>
              <button class="btn_type2 btnDel">Quero deletar minha conta</button>`;
            openModal(conteudo);
            const btnDell = document.querySelector(".btnDel");
            btnDell.addEventListener("click", () => {
              DeleteProfile();
            });
          });
    
    
    
    containerImg.append(img)
    btnContainer.append(btnDadosPerfil,btnDelPerfil)
    data.append(h2,h3Name,h3email)
    containerData.append(data,btnContainer)
    containerUserContainer.append(containerData)
     
}

export async function userPets(obj){
    const pets = obj.my_pets
    
    console.log(pets)
    pets.forEach((pet)=>{
        userPetsRender(pet)
    })
}
export async function userPetsRender(obj){
    
    const container = document.querySelector('#pet-container')

    let li = document.createElement('li')

    let img = document.createElement('img')
        img.src=obj.avatar_url

    let div = document.createElement('div')

    let h4Name = document.createElement('h4')
        h4Name.classList.add('font4-black-regular-reverse')
    let spanName = document.createElement('span')
        spanName.innerText='Nome:'
        spanName.classList.add('font3-purple-bold')
        h4Name.innerText= obj.name
        h4Name.append(spanName)
        
    let h4Especie = document.createElement('h4')
        h4Especie.classList.add('font4-black-regular-reverse')
    let spanEspecie = document.createElement('span')
        spanEspecie.innerText='Especie:'
        spanEspecie.classList.add('font3-purple-bold')
        h4Especie.innerText= obj.species
        h4Especie.append(spanEspecie)

    let h4Status = document.createElement('h4')
        h4Status.classList.add('font4-black-regular-reverse')
        if(obj.available_for_adoption==true){
            h4Status.innerText = 'Sim'
        }
        else{
            h4Status.innerText= 'Não'
        }
    let spanStatus = document.createElement('span')
        spanStatus.classList.add('font3-purple-bold')
        spanStatus.innerText='Adotável:'
        h4Status.append(spanStatus)

    let button = document.createElement('button')
        button.classList.add('btn_type1_light')
        button.innerText='Atualizar'
        button.addEventListener("click", () => {
            const conteudo = `<h2>Atualizar pet</h2>
              <form>
                  <input id="name" value = "${pets.name}"type="text" placeholder="Nome">
                  <input id="bread" value = "${pets.bread}" type="text" placeholder="Raça">
                  <select class = "selectEdit" name = "species" id="species" value = "${pets.species} type="text"></select>
                  <input id="avatar_url" value="${pets.avatar_url} type="text" placeholder="Avatar">
                  <button class="btn_type1">Cadastrar</button>
              </form>`;
            openModal(conteudo);
          
            const formulario = document.querySelector("form");
            const select = document.querySelector(".selectEdit");
            const firstOption = document.createElement("option");
            console.log(select)
            firstOption.innerText = "Especies";
            select.append(firstOption);
          
            especies.forEach((elements) => {
              const option = document.createElement("option");
              option.innerText = elements;
              option.value = elements;
              select.append(option);})
            const elements = [...formulario.elements]
              formulario.addEventListener("submit", (e) => {
                  e.preventDefault();
                  const body = {};
                  elements.forEach((element) => {
                    if (element.tagName == "INPUT" || element.tagName == "SELECT") {
                      body[element.id] = element.value;
                      console.log(body);
                    }
                  });
                  UpdatePetById(body,pets.id)
            });
          });

    div.append(h4Name,h4Especie,h4Status,button)
    li.append(img,div,)
    console.log(li)
    container.append(li)
}


