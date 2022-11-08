
const body = document.querySelector(".modal-place")

export class Btnfunctions{

   static async register(){
        const conteudo = `<h2>Cadastrar</h2>
        <input id="name" type="text" placeholder="Nome">
        <input id="email" type="email" placeholder="E-mail">
        <input id="password" type="password" placeholder="Senha">
        <input id="avatar" type="text" placeholder="Avatar">
        <button id="register" class="btn_type1">Cadastrar</button>
        <span>Já tem cadastro? <span class="link-login">Clique aqui</span> para logar</span>
        `
        Render.openModal(conteudo)

        document.querySelector(".link-login").addEventListener("click",function(){
            Render.cleanModal(body)
            Btnfunctions.login()
        })

    }

    static async login(){
        const conteudo = `<h2>Login</h2>
        <input id="email" type="email" placeholder="E-mail">
        <input id="password" type="password" placeholder="Senha">
        <button id="login" class="btn_type1">Entrar</button>
        <span>Não tem cadastro? <span class="link-register">Clique aqui</span> para se cadastrar.</span>`
    
        Render.openModal(conteudo)

        document.querySelector(".link-register").addEventListener("click",function(){
            Render.cleanModal(body)
            Btnfunctions.register()
        })

    }

}

export class Render {

    static async openModal(conteudo){
        
        
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
            this.cleanModal(body)
        })

    
        containerTopModal.append(btnClose)
        containerModal.append(containerTopModal, containerMidModal, containerBotModal)
        bgModal.append(containerModal)
        body.append(bgModal)
        
    }

    static async cleanModal(element){
        while(element.firstChild){
            element.removeChild(element.firstChild)
        }
    }
}

const btLogin = document.querySelector(".modal_login").addEventListener("click",()=>{
    Btnfunctions.login()
})
const btRegister = document.querySelector(".modal_register").addEventListener("click",()=>{
    Btnfunctions.register()
})