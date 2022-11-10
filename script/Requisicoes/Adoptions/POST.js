import { openModalAdopt } from "../../../pages/home/homePage-logged.js";
import { getLocal } from "../../LocalStorage/localStorage.js";

const baseUrl = "https://m2-api-adot-pet.herokuapp.com/";
const token = getLocal();

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token.token}`,
};

export async function adoptions(body) {
  try {
    const request = await fetch(`${baseUrl}adoptions`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    });
    if (request.ok) {
      const response = request.json();
      openModalAdopt()
      return response;
    }
  } catch (error) {
    console.log(error);
  }
}