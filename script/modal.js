function openModal(conteudo){
    const body = document.querySelector("body")

    const bgModal = document.createElement("div")
    const containerModal = document.createElement("div")
    const containerTopModal = document.createElement("div")
    const containerMidModal = document.createElement("div")
    const containerBotModal = document.createElement("div")
    const btnClose = document.createElement("img")

    containerMidModal.classList.add("modal_mid")
    bgModal.classList.add("bg_modal")
    containerModal.classList.add("container_modal")
    btnClose.classList.add("btn_close")
    containerTopModal.classList.add("modal_top")
    containerBotModal.classList.add("modal_bot")

    btnClose.src = "../../assets/img/close_modal.png"
    containerMidModal.innerHTML = `${conteudo}`

    btnClose.addEventListener("click", () => {
        bgModal.remove(bgModal)
    })
      

    containerTopModal.append(btnClose)
    containerModal.append(containerTopModal, containerMidModal, containerBotModal)
    bgModal.append(containerModal)
    body.append(bgModal)
}

export default openModal