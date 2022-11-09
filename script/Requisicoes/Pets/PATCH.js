import { getLocal } from "../../LocalStorage/localStorage.js";

const baseUrl = "https://m2-api-adot-pet.herokuapp.com/";
const token = getLocal();

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token.token}`,
};

export async function UpdatePetById(body,idPet) {
  try {
    const request = await fetch(`${baseUrl}users/${idPet}`, {
      method: "PATCH",
      headers: headers,
      body: JSON.stringify(body),
    });
    if (request.ok) {
      const response = request.json();
      return response;
    }
  } catch (error) {
    console.log(error);
  }
}
