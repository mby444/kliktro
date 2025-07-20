import axios from "axios";
import env from "./env";

const API = axios.create({
  baseURL: env("VITE_API_BASE_URL", "http://localhost/api"),
});

export default API;
