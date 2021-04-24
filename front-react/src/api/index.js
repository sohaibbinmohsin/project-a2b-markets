import axios from 'axios';

const API_URL  =  axios.create({baseURL: 'http://localhost:8080/api'});
API_URL.interceptors.request.use((req)=>{
    if(localStorage.getItem('user')){
        req.headers['authorization'] = `Bearer ${JSON.parse(localStorage.getItem('user')).token}`
    }
    return req
})
export const fetchCategories = () => API_URL.get('/markets');
export const signIN = (body) => API_URL.post('/user/signin',body)
export const signUP = (body) => API_URL.post('/customer/signup', body)
export const verifyAccount = (body) => API_URL.post('/customer/verify-email',body)
export const viewCart = () => API_URL.get('/customer/viewCart')