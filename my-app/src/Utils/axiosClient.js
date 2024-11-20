import axios from 'axios';

// Configura la URL base para Axios
const axiosClient = axios.create({
  baseURL: 'http://localhost:5001',
});

// Función para obtener todos los posts
export const getAllPosts = async () => {
  try {
    const response = await axiosClient.get('/api/posts'); // Endpoint correcto
    console.log('Datos recibidos del servidor:', response.data);
    return response.data; // Devuelve los datos recibidos
  } catch (error) {
    console.error('Error en la solicitud Axios:', error.response || error.message);
    throw error;
  }
};




export default axiosClient;
