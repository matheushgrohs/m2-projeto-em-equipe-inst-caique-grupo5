import { openModalAdopt } from "../../../pages/home/homePage-logged.js";
import { getLocal } from "./localStorage.js";

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token.token}`,
};

const baseUrl = "https://m2-api-adot-pet.herokuapp.com/";
const token = getLocal();

export async function updateAdoptionById(body, id) {
  try {
    const request = await fetch(`${baseUrl}adoptions/update/${id}`, {
      method: "PATCH",
      headers: headers,
      body: JSON.stringify(body),
    });
    if (request.ok==true) {
      const response = await request.json();
      openModalAdopt()
      return response;
    }
  } catch (error) {
    console.log(error);
  }
}
