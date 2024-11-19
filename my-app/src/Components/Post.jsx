import React from "react";
import Comment from "./Comment";

function Post({ postId, imageUrl, text, initialLikeCount }) {
  return (
    <Comment
      commentId={postId} // Pasa el ID del post al componente Comment
      imageUrl={imageUrl} // Asegúrate de que todos los posts tengan una imagen
      text={text} // Pasa el contenido del post
      showComment={false} // Desactiva la sección de comentarios en los posts
      initialLikeCount={initialLikeCount} // Pasa el número inicial de likes
    />
  );
}

export default Post;
