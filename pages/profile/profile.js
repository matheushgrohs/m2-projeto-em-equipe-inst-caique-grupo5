import { ReadProfile } from "../../script/Requisicoes/Users/GET.js";
import { userPets, userPetsRender, userProfile } from "../../script/render/UserProfile.js";
import openModal from "../../script/modal.js";


const especies = ["Cachorro", "Gato", "Aves", "Repteis", "Outros"];
const user = await ReadProfile();
const pets = await ReadProfile()
 console.log(pets.id)


const btnCadastroPet = document.querySelector('.modal_cadastro_pet')
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


const readProfile = await ReadProfile()
console.log(readProfile)

userProfile(readProfile)
userPets(readProfile)

