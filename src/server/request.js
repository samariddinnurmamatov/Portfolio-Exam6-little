import axios from "axios";

export const request = axios.create({
  baseURL: "https://ap-vodiy-parfum-backend.up.railway.app/api/v1/",
  timeout: 10000,
});
