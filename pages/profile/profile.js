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
 console.log(pets.id)
const btnDelPerfil = document.querySelector(".modal_deletar_perfil");
const btnDadosPerfil = document.querySelector(".modal_dados_perfil");
const btnCadastroPet = document.querySelector(".modal_cadastro_pet");
const btnAtualizarDados = document.querySelector(".modal_atualizar_pet");

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

btnCadastroPet.addEventListener("click", () => {
  const conteudo = `<h2>Cadastrar pet</h2>
    <form>
        <input id="name" type="text" placeholder="Nome">
        <input id="bread" type="text" placeholder="Raça">
        <select id="species" name = "species" type="text"></select>
        <input id="avatar_url" type="text" placeholder="Avatar">
        <button class="btn_type1">Cadastrar</button>
    </form>`;

  openModal(conteudo);

  const formulario = document.querySelector("form");
  const select = document.querySelector("select");
  const firstOption = document.createElement("option");
  firstOption.innerText = "Especies";
  select.append(firstOption);

  especies.forEach((elements) => {
    const option = document.createElement("option");
    option.innerText = elements;
    option.value = elements;
    select.append(option);
  });
  const elements = [...formulario.elements];

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const body = {};
    elements.forEach((element) => {
      if (element.tagName == "INPUT" || element.tagName == "SELECT") {
        body[element.id] = element.value;
        console.log(body);
      }
    });
    //chamar funcão que for renderizar
    CreatePet(body);
  });
});

btnAtualizarDados.addEventListener("click", () => {
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

