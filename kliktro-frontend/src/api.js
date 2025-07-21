import axios from "axios";
import env from "./env";

const API = axios.create({
  baseURL: env("VITE_API_BASE_URL", "http://localhost:8000/api"),
});

export default API;
