import axios from "axios";

const theatreClient = () => {
  const client = axios.create({
    baseURL: "http://localhost:5001/",
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
      //   Authorization: document.cookie("accessToken"),
    },
  });
  return {
    allTheatres: () => client.get("/api/v1/theatre/"),
  };
};

const Api = theatreClient();
export default Api;
