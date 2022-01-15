import axios from 'axios';


const http = axios.create({
    baseURL: 'http://www.hwcd.net',
    // baseURL: 'http://192.168.52.148:3001',
    timeout: 5000,
});

export { http };
