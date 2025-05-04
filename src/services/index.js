import axios from "axios";
import {VUE_APP_API_URL} from '@/config/config';

const _axios = axios.create({
    baseURL: VUE_APP_API_URL,
    timeout: 300000, headers: {
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    },
});

/* _axios.interceptors.request.use(config => {
    const auth_token = Vue.$cookies.get('OECCAtoken');
    if (auth_token) config.headers.Authorization = `Bearer ${auth_token}`;
    return config;
}, error => Promise.reject(error)); */

/* _axios.interceptors.response.use(config => {
    console.log(config.status);
    return config;
}, error => Promise.reject(error)); */

export default _axios;