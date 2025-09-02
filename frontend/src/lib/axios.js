import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:8000/api"
      : "https://chatapp-34rn.onrender.com/api",
  withCredentials: true,
});
