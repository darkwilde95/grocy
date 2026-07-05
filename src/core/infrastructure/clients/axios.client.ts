import axios from "axios";

const base = axios.create({
  baseURL: process.env.API_URL || "http://localhost:4000",
  headers: {
    "Content-Type": "application/json",
  },
});

// export const axiosClient = {
//   async get<T>(url: string): Promise<T> {
//     const response = await base.get(url);
//     return response;
//   },
// };
