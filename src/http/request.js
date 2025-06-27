import axios from "axios";
import store from "@/stores";
import { getToken } from "../helpers/auth";

const service = axios.create({
  //baseURL: "https://mycanalolympia.dotbmedia.com/api", // url = base url + request url
  baseURL: "http://localhost:8080/api", 
  withCredentials: false, // send cookies when cross-domain requests
  crossorigin: true,
  timeout: 60000, // request timeout
});

// Request interceptor
service.interceptors.request.use(
  (config) => {
    if (store.getters["user/token"]) {
      config.headers.Authorization = "Bearer " + getToken(); // Set JWT token
    }
    return config;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);

// Response interceptor
service.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) => {
    // Vérifier si la réponse existe et si le status est 401 (token expiré ou invalide)
    if (error.response && error.response.status === 500) {
      localStorage.removeItem("userConnected")
      // Déconnecter l'utilisateur
      store.dispatch("user/logout");
      // Optionnel : rediriger vers la page de connexion
      window.location.href = "/login";
    } else if (!error.response && error.message === "Network Error") {
      //alert("Vous n'êtes pas connecté à internet");
    }
    return Promise.reject(error);
  }
);

export default service;
