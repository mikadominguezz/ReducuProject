import axios from 'axios';

// Configura la URL base para Axios
const axiosClient = axios.create({
  baseURL: 'http://localhost:5001',
});

// Función para crear un nuevo post
export const createPost = async (postData) => {
  try {
    const response = await axiosClient.post('/api/posts', postData);
    return response.data; // Devuelve los datos del post creado
  } catch (error) {
    console.error('Error al crear el post:', error.response?.data || error.message);
    throw error;
  }
};

// Función para eliminar un post por su ID
export const deletePost = async (postId) => {
  try {
    const response = await axiosClient.delete(`/api/posts/${postId}`);
    return response.data; // Devuelve el mensaje de éxito
  } catch (error) {
    console.error('Error al eliminar el post:', error.response?.data || error.message);
    throw error;
  }
};

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

export const likePost = async (postId, likedBy) => {
  try {
    const response = await axiosClient.post(`/api/posts/${postId}/like`, { liked_by: likedBy });
    return response.data;
  } catch (error) {
    console.error('Error al dar like al post:', error.response?.data || error.message);
    throw error;
  }
};

// Función para obtener comentarios por nombre de usuario
export const getCommentsByUsername = async (username) => {
  try {
    const response = await axiosClient.get(`/api/comments/user/${username}`);
    return response.data; // Devuelve los datos recibidos
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

// Función para eliminar un comentario por su ID
export const deleteComment = async (commentId) => {
  try {
    const response = await axiosClient.delete(`/api/comments/${commentId}`);
    return response.data; // Mensaje de éxito o error
  } catch (error) {
    console.error('Error al eliminar el comentario:', error.response || error.message);
    throw error;
  }
};

export default axiosClient;