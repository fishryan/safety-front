import axios from "axios"


const instance = axios.create({
    baseURL: 'https://192.168.126.1:8000/api/',
    timeout: 2000,
  });


  export default instance;