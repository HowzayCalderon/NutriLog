import axios from "axios";

const api = axios.create({
  baseURL: "https://nutritionx-app.herokuapp.com/",
});

export default api;