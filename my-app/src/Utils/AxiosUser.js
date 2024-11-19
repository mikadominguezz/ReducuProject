import axios from 'axios';

// Crear una instancia de Axios con la configuración base
const AxiosUser = axios.create({
    baseURL: 'http://localhost:3000/api', // Cambia esto según tu URL base del backend
    headers: { 'Content-Type': 'multipart/form-data'},
});

export default AxiosUser;