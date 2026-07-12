import { CustomError, ErrorType } from "@/infrastructure/error/CustomError";
import { API_URL, TIMEOUT } from "@infrastructure/constants";
import { HttpClient } from "@infrastructure/interfaces/http-client.interface";
import { HttpResponse } from "@infrastructure/interfaces/http-response.interface";

import axios, { AxiosError } from "axios";

const base = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: TIMEOUT,
});

// TODO: Verificar que los errores de conexion y timeout tambien son AxiosErrors

const handleError = <T>(error: AxiosError<HttpResponse<T>>) => {
  const errorMessage = error.response?.data.error?.message || error.message;
  const errorStatus = error.response?.status || ErrorType.INTERNAL_ERROR;
  const validations = error.response?.data?.error?.validations || {};
  throw new CustomError(errorMessage, errorStatus, validations);
};

export const axiosClient: HttpClient = {
  get: async <T>(url: string, params?: Record<string, any>): Promise<T> => {
    try {
      const response = await base.get<HttpResponse<T>>(url, { params });
      return response.data.data;
    } catch (error) {
      return handleError(error as AxiosError<HttpResponse<T>>);
    }
  },

  post: async <T>(url: string, body?: unknown): Promise<T> => {
    try {
      const response = await base.post<HttpResponse<T>>(url, body);
      return response.data.data;
    } catch (error) {
      return handleError(error as AxiosError<HttpResponse<T>>);
    }
  },

  put: async <T>(url: string, body?: unknown): Promise<T> => {
    try {
      const response = await base.put<HttpResponse<T>>(url, body);
      return response.data.data;
    } catch (error) {
      return handleError(error as AxiosError<HttpResponse<T>>);
    }
  },

  delete: async <T>(url: string): Promise<T> => {
    try {
      const response = await base.delete<HttpResponse<T>>(url);
      return response.data.data;
    } catch (error) {
      return handleError(error as AxiosError<HttpResponse<T>>);
    }
  },
};
