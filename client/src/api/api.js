import axios from "axios";

const apiClient = () => {
  const client = axios.create({
    baseURL: "http://localhost:5001/",
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return {
    login: (payload) =>
      client.post("/api/v1/users/login", JSON.stringify(payload)),
    Register: (payload) =>
      client.post("/api/v1/users/create", JSON.stringify(payload)),
  };
};

const Api = apiClient();
export default Api;
