import { getLocal } from "../../LocalStorage/localStorage.js";

const baseUrl = "https://m2-api-adot-pet.herokuapp.com/";
const token = getLocal();

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token.token}`,
};

export async function DeleteProfile() {
  try {
    const request = await fetch(`${baseUrl}users/profile`, {
      method: "DELETE",
      headers: headers,
    });
    if (request.ok) {
      localStorage.clear()
    }
  } catch (error) {
    console.log(error);
  }
}
