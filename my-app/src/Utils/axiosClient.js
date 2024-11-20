import axios from 'axios';

// Configura la URL base para Axios
const axiosClient = axios.create({
  baseURL: 'http://localhost:5001',
});

// Función para obtener todos los posts
export const getAllPosts = async () => {
  try {
    const response = await axiosClient.get('/api/posts'); // Endpoint correcto
    return response.data; // Devuelve los datos recibidos
  } catch (error) {
    console.error('Error en la solicitud Axios:', error.response || error.message);
    throw error;
  }
};

export const getPostsByUserId = async (userId) => {
  try {
  const response = await axiosClient.get(`/api/posts/user/${userId}`);
  return response.data;
} catch (error) {
  console.error('Error en la solicitud Axios:', error.response || error.message);
  throw error;
}
};

// Función para obtener comentarios por postId
export const getCommentsByPostId = async (postId) => {
  try {
    const response = await axiosClient.get(`/api/comments/post/${postId}`);
    return response.data;
  } catch (error) {
    console.error('Error en la solicitud Axios:', error.response || error.message);
    throw error;
  }
};


// Función para crear un nuevo comentario
export const createComment = async (commentData) => {
  try {
    const response = await axiosClient.post('/api/comments', commentData);
    return response.data; // Devuelve los datos recibidos (incluyendo el ID del comentario creado)
  } catch (error) {
    console.error('Error al crear el comentario:', error.response || error.message);
    throw error;
  }
};


export default axiosClient;
