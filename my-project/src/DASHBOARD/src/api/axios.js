import axios from "axios";

const API = axios.create({
  baseURL: "https://testing-travel-agency.onrender.com/api",
  withCredentials: true,
});

export default API;
