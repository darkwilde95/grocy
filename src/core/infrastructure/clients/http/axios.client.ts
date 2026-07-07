import { CustomError, ErrorType } from "@infrastructure/error/CustomError";
import { HttpClient } from "@interfaces/http-client.interface";
import { HttpResponse } from "@interfaces/http-response.interface";
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
    const errorStatus = error.response?.status || ErrorType.INTERNAL_ERROR;
    const validations = error.response?.data?.error?.validations || {};
    throw new CustomError(errorMessage, errorStatus, validations);
  }
  throw new CustomError("Ocurrió un error inesperado en la red", 0);
};

export const axiosClient: HttpClient = {
  get: async <T>(url: string, params?: Record<string, any>): Promise<T> => {
    try {
      const response = await base.get<HttpResponse<T>>(url, { params });
      return response.data.data;
    } catch (error) {
      return handleError(error);
    }
  },

  post: async <T>(url: string, body?: unknown): Promise<T> => {
    try {
      const response = await base.post<HttpResponse<T>>(url, body);
      return response.data.data;
    } catch (error) {
      return handleError(error);
    }
  },

  put: async <T>(url: string, body?: unknown): Promise<T> => {
    try {
      const response = await base.put<HttpResponse<T>>(url, body);
      return response.data.data;
    } catch (error) {
      return handleError(error);
    }
  },

  delete: async <T>(url: string): Promise<T> => {
    try {
      const response = await base.delete<HttpResponse<T>>(url);
      return response.data.data;
    } catch (error) {
      return handleError(error);
    }
  },
};
