import axios from 'axios';

// Axios instance with default configurations
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api/', // Adjust baseURL as per your backend API structure
  timeout: 10000, // Adjust timeout as needed
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
