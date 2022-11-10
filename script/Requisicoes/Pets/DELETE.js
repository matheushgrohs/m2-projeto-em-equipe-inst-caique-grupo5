import { getLocal } from "../../LocalStorage/localStorage.js";

const baseUrl = "https://m2-api-adot-pet.herokuapp.com/";
const token = getLocal();

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token.token}`,
};

export async function UpdatePetById(idPet) {
  try {
    const request = await fetch(`${baseUrl}users/${idPet}`, {
      method: "DELETE",
      headers: headers,
    });
    if (request.ok) {
      const response = request.json();
      return response;
    }
  } catch (error) {
    console.log(error);
  }
}
