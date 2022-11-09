import { getLocal } from "./localStorage.js";

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token.token}`,
};

const baseUrl = "https://m2-api-adot-pet.herokuapp.com/";
const token = getLocal();

export async function DeleteAdoptionById(id) {
  try {
    const request = await fetch(`${baseUrl}adoptions/delete/${id}`);
  } catch (error) {
    console.log(error);
  }
}
