export function getLocal (){
    const token = JSON.parse(localStorage.getItem("token"))
    return token
}