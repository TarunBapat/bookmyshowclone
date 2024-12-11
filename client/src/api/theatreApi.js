import axios from "axios";

const token = localStorage.getItem("authToken");
const theatreClient = () => {
  const client = axios.create({
    baseURL: "http://localhost:5001/",
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  return {
    allTheatres: () => client.get("/api/v1/theatre/"),
  };
};

const Api = theatreClient();
export default Api;
