import { getLocal } from "./localStorage.js";

const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token.token}`,
}

const baseUrl = "https://m2-api-adot-pet.herokuapp.com/";
const token = getLocal();

export async function DeleteProfile() {
  try {
    const request = await fetch(`${baseUrl}users/profile`, {
      method: "DELETE",
      Headers: headers
    });
    if (request.ok) {
      const response = await request.json();
      return response;
    }
  } catch (error) {
    console.log(error);
  }
}
