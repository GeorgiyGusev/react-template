
import axiosInstance from "~/utils/axios/instance";

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Добавление интерсепторов ответов
axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.error('API Error:', error.response);
    return Promise.reject(error);
  }
);