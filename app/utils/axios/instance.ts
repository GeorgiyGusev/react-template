
// Создаем экземпляр Axios
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://api.example.com', // Замените на ваш базовый URL API
  timeout: 10000, // Таймаут запросов (10 секунд)
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
