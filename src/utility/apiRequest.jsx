import axios from "axios";
const apiRequest = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: true,
});

export default apiRequest;
