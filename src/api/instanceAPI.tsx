import axios from "axios";

export const instance = axios.create({
  baseURL:
    "https://my-json-server.typicode.com/LuydmilaKolesnikova/my-json-server/",
  withCredentials: true,
});
