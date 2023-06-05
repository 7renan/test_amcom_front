import axios from "axios";


const apiUrl = import.meta.env.VITE_API_URL || "https://localhost:8000";

export const api = axios.create({
  baseURL: apiUrl,
});

export const baseUrlV1 = "/api/v1";
