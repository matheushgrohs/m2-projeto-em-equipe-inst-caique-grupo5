import { getLocal } from "./localStorage.js";

const baseUrl = "https://m2-api-adot-pet.herokuapp.com/";
const token = getLocal();

export async function ReadAllAdoptions() {
  try {
    const request = await fetch(`${baseUrl}adoptions`, {
      method: "GET",
      headers: {
        "Content-Type": "Application/json",
        authorization: `Bearer${token.token}`,
      },
    });
    const response = await request.json();
    console.log(response)
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function ReadAdoptionById(idAdotion) {
  try {
    const request = await fetch(`${baseUrl}adoptions/${idAdotion}`, {
      method: "GET",
      headers: {
        "Content-Type": "Application/json",
        authorization: `Bearer${token.token}`,
      },
    });
    const response = await request.json();
    return response;
  } catch (error) {
    console.log(error);
  }
}
ReadAllAdoptions()
