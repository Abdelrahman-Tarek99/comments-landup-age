// axiosInstance.ts
import axios from 'axios';


export const BASELOCALHOST = 'http://localhost:1337';
export const axiosInstance = axios.create({
  baseURL: 'http://localhost:1337/api/comnts', // BASEURL
  headers: {
    // Use your API key from your environment variables
    'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`,
  },
});

