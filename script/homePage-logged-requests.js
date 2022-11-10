const baseUrl = 'https://m2-api-adot-pet.herokuapp.com'
const token = localStorage.getItem('token')

const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

export async function getPets () {
    const pets = await fetch (`${baseUrl}/pets`, {
        method: 'GET',
        headers: headers
    })
    .then(resp => resp.json())
    .catch(err => console.log(err))
    return pets
}

