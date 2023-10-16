import axios from "axios";

axios.defaults.withCredentials = true;

// for local hosting : baseURL: "http://localhost:3005/",

const ServerApi = axios.create({
  baseURL: "server.espanolmaestro.com/",
  withCredentials: true,
});

export default ServerApi;
