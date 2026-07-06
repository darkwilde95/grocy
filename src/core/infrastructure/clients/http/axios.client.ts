import { HttpClient } from "@interfaces/http-client.interface";
import axios, { AxiosError } from "axios";

const base = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL || "http://localhost:4000",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

const handleError = (error: unknown) => {
  if (error instanceof AxiosError) {
    const errorMessage = error.response?.data?.message || error.message;
    throw new Error(errorMessage);
  }
  throw new Error("Ocurrió un error inesperado en la red");
};

export const axiosClient: HttpClient = {
  async get<T>(url: string, params?: Record<string, any>): Promise<T> {
    try {
      const response = await base.get<T>(url, { params });
      return response.data;
    } catch (error) {
      return handleError(error);
    }
  },

  async post<T>(url: string, body?: unknown): Promise<T> {
    try {
      const response = await base.post<T>(url, body);
      return response.data;
    } catch (error) {
      return handleError(error);
    }
  },

  async put<T>(url: string, body?: unknown): Promise<T> {
    try {
      const response = await base.put<T>(url, body);
      return response.data;
    } catch (error) {
      return handleError(error);
    }
  },

  async delete<T>(url: string): Promise<T> {
    try {
      const response = await base.delete<T>(url);
      return response.data;
    } catch (error) {
      return handleError(error);
    }
  },
};
