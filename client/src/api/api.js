import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5001/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

const login = (payload) => {
  apiClient.post("/api/v1/users/login", JSON.stringify(payload));
};

export default login;
