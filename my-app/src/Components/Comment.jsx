import React, { useState } from "react";
import Heart from "react-heart";
import axios from "axios";
import PropTypes from "prop-types";
import CommentSection from "./CommentSection"; // Sección de comentarios

function Comment({
  imageUrl,
  text,
  commentId,
  showComment, // Indica si debe incluir el botón de comentarios
  initialLikeCount,
  userImageUrl, // Imagen del usuario
}) {
  const [active, setActive] = useState(false); // Estado del corazón
  const [likeCount, setLikeCount] = useState(initialLikeCount || 0); // Estado del contador de likes
  const [showCommentSection, setShowCommentSection] = useState(false); // Estado de la sección de comentarios

  const handleHeartClick = async () => {
    try {
      if (!active) {
        await axios.post(`http://localhost:5001/api/comments/like/${commentId}`);
        setLikeCount((prevCount) => prevCount + 1);
      } else {
        await axios.post(`http://localhost:5001/api/comments/unlike/${commentId}`);
        setLikeCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
      }
      setActive(!active);
    } catch (error) {
      console.error("Error al actualizar el like/unlike:", error);
    }
  };

  const toggleCommentSection = () => {
    setShowCommentSection((prev) => !prev);
  };

  return (
    <div>
      {/* Contenedor del comentario */}
      <div style={{ display: "flex", justifyContent: "center", paddingTop: "10px" }}>
        {/* Imagen del usuario */}
        {userImageUrl && (
          <img
            src={userImageUrl}
            alt="User"
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "50%",
              objectFit: "cover",
              marginRight: "10px",
            }}
          />
        )}

        <div
          style={{
            border: "2px solid black",
            borderRadius: "10px",
            width: "35rem",
            height: "auto",
          }}
        >
          <div style={{ padding: "0.5rem" }}>{text && <h3>{text}</h3>}</div>

          {/* Imagen del contenido (solo para posts) */}
          {imageUrl && (
            <img
              src={imageUrl}
              alt="Content"
              style={{
                padding: "10px",
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />
          )}
        </div>
      </div>

      {/*likes y comentarios*/}
      <div
        style={{
          display: "flex",
          paddingLeft: "19rem",
          gap: "0.5rem",
          alignItems: "center",
        }}
      >
        {/* Botón de likes */}
        <div style={{ width: "2rem", paddingTop: "0.35rem" }}>
          <Heart isActive={active} onClick={handleHeartClick} />
        </div>
        <span>{likeCount}</span>

        {/* Botón de comentarios */}
        {showComment && (
          <button
            style={{
              border: "none",
              background: "transparent",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={toggleCommentSection}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-message-circle"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="#000000"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 20l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c3.255 2.777 3.695 7.266 1.029 10.501c-2.666 3.235 -7.615 4.215 -11.574 2.293l-4.7 1" />
            </svg>
          </button>
        )}
      </div>

      {/* Sección de comentarios */}
      {showCommentSection && (
        <div style={{ paddingTop: "1rem" }}>
          <CommentSection />
        </div>
      )}
    </div>
  );
}

Comment.propTypes = {
  imageUrl: PropTypes.string,
  text: PropTypes.string.isRequired,
  commentId: PropTypes.number.isRequired,
  showComment: PropTypes.bool,
  initialLikeCount: PropTypes.number,
  userImageUrl: PropTypes.string,
};

export default Comment;