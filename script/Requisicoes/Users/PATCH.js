import { getLocal } from "./localStorage.js";

const baseUrl = "https://m2-api-adot-pet.herokuapp.com/";
const token = getLocal();

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token.token}`,
};

export async function UpdateProfile(body) {
  try {
    const request = await fetch(`${baseUrl}users/profile`, {
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
