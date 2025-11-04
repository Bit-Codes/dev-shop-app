import { User } from "@/types/user";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
});

export interface AuthResponse {
  accessToken: string;
  user: User;
}

api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem("@token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authService = {
  async login(email: string, password: string) {
    try {
      const response = await api.post("/login", {
        email,
        password,
      });
      return response.data;
    } catch (error) {
      console.error("Erro in login", error);
      // throw error;
    }
  },
  async register(name: string, email: string, password: string) {
    try {
      const response = await api.post("/register", {
        name,
        email,
        password,
      });
      return response.data;
    } catch (error) {
      console.error("Erro in register", error);
      //throw error;
    }
  },
  async getCurrentUser() {
    try {
      const response = await api.get("/users/me");
      return response.data;
    } catch (error: any) {
      //throw error;
    }
  },
};

export const productService = {
  async getProducts() {
    try {
      const response = await api.get("/products");
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
  async getProductById(id: number) {
    try {
      const response = await api.get(`/products/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
  async getCategories() {
    try {
      const response = await api.get(`/categories`);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },
  async getProductByCategory(categoryId: number) {
    try {
      const response = await api.get(`/products?categoryId=${categoryId}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
};
