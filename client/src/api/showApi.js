import axios from "axios";

const token = localStorage.getItem("authToken");
const moviesClient = () => {
  const client = axios.create({
    baseURL: "http://localhost:5001/",
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  return {
    getShows: (payload) => client.get(`/api/v1/show?movie=${payload}`),
    getShowById: (id) => client.get(`/api/v1/show/shows/${id}`),
  };
};

const Api = moviesClient();
export default Api;
