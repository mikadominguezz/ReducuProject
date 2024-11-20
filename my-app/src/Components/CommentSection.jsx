import React, { useEffect, useState } from 'react';
import Comment from './Comment';
import { getCommentsByPostId, getCommentsByUsername, createComment, deleteComment } from '../Utils/axiosClient';

function CommentSection({ postId, username }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [error, setError] = useState(null);

  // Función para obtener comentarios según `postId` o `username`
  useEffect(() => {
    const fetchComments = async () => {
      try {
        let data;
        if (postId) {
          // Obtener comentarios por `postId`
          data = await getCommentsByPostId(postId);
        } else if (username) {
          // Obtener comentarios por `username`
          data = await getCommentsByUsername(username);
        }
        setComments(data); // Actualizamos el estado con los datos recibidos
      } catch (err) {
        console.error('Error al cargar los comentarios:', err);
        setError('No se pudieron cargar los comentarios.');
      }
    };

    // Llamar a la función si tenemos `postId` o `username`
    if (postId || username) {
      fetchComments();
    }
  }, [postId, username]);

  // Función para crear un nuevo comentario
  const handleCommentSubmit = async () => {
    if (!newComment.trim()) {
      alert('El comentario no puede estar vacío.');
      return;
    }

    try {
      const commentData = {
        post_id: postId,
        created_by: 'Usuario actual', // Cambia esto por el usuario actual (puedes extraerlo de un contexto o estado global)
        content: newComment,
        img: null, // O lógica para manejar imágenes opcionales
      };

      const response = await createComment(commentData);

      // Actualizar la lista de comentarios en el estado
      setComments((prevComments) => [
        ...prevComments,
        {
          ...commentData,
          comment_id: response.commentId,
          created_at: new Date().toISOString(),
          likes_count: 0,
        },
      ]);

      // Limpiar el campo de entrada
      setNewComment('');
    } catch (err) {
      console.error('Error al enviar el comentario:', err);
      setError('No se pudo enviar el comentario.');
    }
  };

  // Función para eliminar un comentario
  const handleCommentDelete = async (commentId) => {
    try {
      await deleteComment(commentId);

      // Filtrar el comentario eliminado del estado
      setComments((prevComments) =>
        prevComments.filter((comment) => comment.comment_id !== commentId)
      );
    } catch (err) {
      console.error('Error al eliminar el comentario:', err);
      setError('No se pudo eliminar el comentario.');
    }
  };

  return (
    <div>
      <div className="main">
        <div className="subtitle">
          <h4>
            {postId ? 'Comentarios del Post' : `Comentarios de ${username}`}
          </h4>
        </div>

        {error ? (
          <p>{error}</p>
        ) : comments.length > 0 ? (
          <div>
            {comments.map((comment) => (
              <div
                key={comment.comment_id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1rem',
                }}
              >
                <Comment
                  key={comment.comment_id}
                  imageUrl={comment.img}
                  text={comment.content}
                  commentId={comment.comment_id}
                />
                <button
                  onClick={() => handleCommentDelete(comment.comment_id)}
                  style={{
                    border: 'none',
                    background: 'none',
                    cursor: 'pointer',
                    color: 'red',
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FF0000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    width="24"
                    height="24"
                    strokeWidth="2"
                  >
                    <path d="M3 6h18M9 6v12M15 6v12M4 6l1 16h14l1-16M10 3h4a2 2 0 0 1 2 2v1H8V5a2 2 0 0 1 2-2z" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p>No hay comentarios disponibles.</p>
        )}

        {postId && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: '10px',
              paddingLeft: '7rem',
            }}
          >
            <div
              style={{
                border: '2px solid black',
                borderRadius: '10px',
                width: '35rem',
                height: '7.2rem',
              }}
            >
              <textarea
                className="form-control"
                rows="4"
                placeholder="Escribe tu comentario..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              ></textarea>
            </div>

            <button
              style={{
                background: 'none',
                border: 'none',
              }}
              onClick={handleCommentSubmit}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#173363"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="30"
                height="30"
                strokeWidth="2"
              >
                <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"></path>
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CommentSection;
