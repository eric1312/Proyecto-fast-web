// Axios wrapper y endpoints esperados
import axios from 'axios'


export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api'


const api = axios.create({
    baseURL: API_URL,
    headers: { 'Content-Type': 'application/json' }
})


// Interceptor para agregar token si existe
api.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    if (token) config.headers.Authorization = `Bearer ${token}`
    return config
})


export const productosService = {
    getAll: () => api.get('/productos'),
    getByCategoria: (catId) => api.get(`/productos/categoria/${catId}`),
    getOne: (id) => api.get(`/productos/${id}`)
}


export const categoriasService = {
    getAll: () => api.get('/categorias')
}


export const authService = {
    login: (payload) => api.post('/auth/login', payload),
    me: () => api.get('/auth/me')
}


export default api