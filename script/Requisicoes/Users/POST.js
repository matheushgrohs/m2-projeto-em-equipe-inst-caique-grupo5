const baseUrl = "https://m2-api-adot-pet.herokuapp.com/";

export async function Register(body) {
  try {
    const request = await fetch(`${baseUrl}user`, {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify(body),
    });
    if (request.ok) {
      const response = request.json();
      setTimeout(() => {
        const bgModal = document.querySelector("bg_modal");
        bgModal.remove(bgModal);
      }, 3000);
      return response;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function Login(body) {
  try {
    const request = await fetch(`${baseUrl}session/login`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(body),
    });
    if (request.ok) {
      const response = await request.json();
      localStorage.setItem("User", JSON.stringify(response));
      return response;
    }
  } catch (error) {
    console.log(error);
  }
}
