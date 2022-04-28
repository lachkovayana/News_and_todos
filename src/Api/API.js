import axios from "axios"

async function auth(url, data) {
    return await fetch(url, {
        credentials: "same-origin",
        method: "POST",
        body: JSON.stringify(data),
        headers: new Headers({
            "Content-Type": "application/json",
        }),
    })
        .then((response) => response.json())
        .catch((error) => console.error(error));
}

auth("https://sas.front.kreosoft.space/api/auth", {
    username: "llach",
    password: "llach",
})
    .then((data) => localStorage.setItem("token", data.accessToken))
    .catch((error) => console.error(error));


const baseURL = "https://sas.front.kreosoft.space/"

export const instance = axios.create({
    headers:{
        Authorization : "Bearer " + localStorage.getItem("token"),
    },
    baseURL,
})
