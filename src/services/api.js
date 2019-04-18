import axios from "axios";

const api = axios.create({
  baseURL: "https://omnistack-backend21.herokuapp.com"
});

export default api;
