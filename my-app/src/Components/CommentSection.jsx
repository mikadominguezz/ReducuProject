import React, { useEffect, useState } from 'react';
import Comment from './Comment';
import '../App.css';
import { getCommentsByPostId, createComment, deleteComment } from '../Utils/axiosClient';

function CommentSection({ postId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const data = await getCommentsByPostId(postId);
        setComments(data);
      } catch (err) {
        console.error('Error al cargar los comentarios:', err);
        setError('No se pudieron cargar los comentarios.');
      }
    };

    if (postId) {
      fetchComments();
    }
  }, [postId]);

  const handleCommentSubmit = async () => {
    if (!newComment.trim()) {
      alert('El comentario no puede estar vacío.');
      return;
    }

    try {
      const commentData = {
        post_id: postId,
        created_by: 'Usuario actual', // Cambia esto por el nombre o ID del usuario actual
        content: newComment,
        img: null, // Agrega lógica si deseas permitir imágenes opcionales
      };

      const response = await createComment(commentData);

      setComments((prevComments) => [
        ...prevComments,
        {
          ...commentData,
          comment_id: response.commentId,
          created_at: new Date().toISOString(),
          likes_count: 0,
        },
      ]);

      setNewComment('');
    } catch (err) {
      console.error('Error al enviar el comentario:', err);
      setError('No se pudo enviar el comentario.');
    }
  };

  const handleCommentDelete = async (commentId) => {
    try {
      await deleteComment(commentId);
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
          <h4>Comment Section</h4>
        </div>

        {error ? (
          <p>{error}</p>
        ) : comments.length > 0 ? (
          <div>
            {comments.map((comment) => (
              <div key={comment.comment_id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Comment
                  imageUrl={comment.img}
                  text={comment.content}
                  showComment={false}
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
          <p>No hay comentarios disponibles para este post.</p>
        )}

        {/* Input para nuevos comentarios */}
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
      </div>
    </div>
  );
}

export default CommentSection;