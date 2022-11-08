import openModal from "./script.js"

const btnDelPerfil = document.querySelector(".modal_deletar_perfil")
const btnDadosPerfil = document.querySelector(".modal_dados_perfil")
const btnCadastroPet = document.querySelector(".modal_cadastro_pet")
const btnAtualizarDados = document.querySelector(".modal_atualizar_pet")

btnDelPerfil.addEventListener("click", () => {
    const conteudo = `<h2>Deseja mesmo deletar sua conta?</h2>
    <button class="btn_type1">Não quero deletar minha conta</button>
    <button class="btn_type2">Quero deletar minha conta</button>`

    openModal(conteudo)
})

btnDadosPerfil.addEventListener("click", () => {
    const conteudo = `<h2>Atualizar perfil</h2>
    <input type="text" placeholder="Nome">
    <input type="email" placeholder="E-mail">
    <input type="text" placeholder="Avatar">
    <button class="btn_type1">Atualizar</button>
    `

    openModal(conteudo)
})
btnCadastroPet.addEventListener("click", () => {
    const conteudo = `<h2>Cadastrar pet</h2>
    <input type="text" placeholder="Nome">
    <input type="email" placeholder="Raça">
    <input type="text" placeholder="Avatar">
    <button class="btn_type1">Cadastrar</button>`

    openModal(conteudo)
})
btnAtualizarDados.addEventListener("click", () => {
    const conteudo = `<h2>Atualizar pet</h2>
    <input type="text" placeholder="Avatar">
    <button class="btn_type1">Atualizar</button>`

    openModal(conteudo)
})

