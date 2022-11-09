import { getLocal } from "./localStorage.js";

const baseUrl = "https://m2-api-adot-pet.herokuapp.com/";
const token = getLocal()

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token.token}`,
};

export async function CreatePet(body) {
  try {
    const request = await fetch(`${baseUrl}pets`, {
      method: "POST",
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

