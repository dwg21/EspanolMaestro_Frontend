import axios from "axios";

axios.defaults.withCredentials = true;

const ServerApi = axios.create({
  baseURL: "http://localhost:3005/",
  withCredentials: true,
});

export default ServerApi;
