export function getLocal (){
    const token = JSON.parse(localStorage.getItem("User"))
    return token
}