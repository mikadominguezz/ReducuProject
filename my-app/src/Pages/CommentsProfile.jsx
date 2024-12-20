import React, { useEffect, useState } from 'react';
import Comment from '../Components/Comment';
import BackButton from '../Components/BackButton';
import PageLayout from '../Components/PageLayout';
import { useAuth0 } from '@auth0/auth0-react';
import { getCommentsByUsername } from '../Utils/axiosClient';

function CommentsProfile() {
  const { user } = useAuth0();
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserComments = async () => {
      try {
        const data = await getCommentsByUsername(user.name);
        setComments(data);
      } catch (err) {
        console.error('Error al cargar los comentarios del usuario:', err);
        setError('No se pudieron cargar los comentarios.');
      }
    };

    if (user?.name) {
      fetchUserComments();
    }
  }, [user?.name]);

  return (
    <PageLayout>
      <div className='main'>
        <div className='title'>
          <BackButton />
          <h2>Comments You've Made</h2>
        </div>
        {error ? (
          <p>{error}</p>
        ) : comments.length > 0 ? (
          comments.map((comment) => (
            <Comment
              key={comment.comment_id}
              imageUrl={comment.img}
              text={comment.content}
              commentId={comment.comment_id}
            />
          ))
        ) : (
          <p>No has hecho comentarios aún.</p>
        )}
      </div>
    </PageLayout>
  );
}

export default CommentsProfile;
