import { getLocal } from "./localStorage.js";

const baseUrl = "https://m2-api-adot-pet.herokuapp.com/";
const token = getLocal();

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token.token}`,
};

export async function Allusers() {
  try {
    const request = await fetch(`${baseUrl}users`, {
      method: "GET",
      headers: headers,
    });
    const response = await request.json();
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function ReadProfile() {
  try {
    const request = await fetch(`${baseUrl}users/profile`, {
      method: "GET",
      headers: headers,
    });
    const response = await request.json();
    return response;
  } catch (error) {
    console.log(error);
  }
}
