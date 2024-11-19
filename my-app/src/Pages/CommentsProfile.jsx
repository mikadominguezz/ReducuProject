import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Comment from '../Components/Comment';
import BackButton from '../Components/BackButton';
import PageLayout from '../Components/PageLayout';
import { useAuth0 } from '@auth0/auth0-react';

function CommentsProfile() {
  const { user, isAuthenticated } = useAuth0();
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      if (!isAuthenticated || !user?.nickname) {
          setError('You must be logged in to view your comments.');
          setLoading(false);
          return;
      }
  
      const nickname = user.nickname;
      console.log('Auth0 User Nickname:', nickname);
  
      try {
          const response = await axios.get(`http://localhost:5001/api/comments/user/${nickname}`);
          console.log('Response from backend:', response.data);
          setComments(response.data);
      } catch (err) {
          console.error('Error fetching comments:', err.response?.data || err.message);
          setError('Failed to load comments.');
      } finally {
          setLoading(false);
      }
    };
  

    fetchComments();
}, [isAuthenticated, user]);


  return (
    <PageLayout>
      <div className="main">
        <div className="title">
          <BackButton />
          <h2>Comments You've Made</h2>
        </div>

        {loading ? (
          <p>Loading comments...</p>
        ) : error ? (
          <p>{error}</p>
        ) : comments && comments.length > 0 ? (
          comments.map((comment) => (
            <Comment
              key={comment.comment_id}
              commentId={comment.comment_id}
              text={comment.content}
              imageUrl={null} // Los comentarios no tienen imagen
              userImageUrl={"https://example.com/user-image.jpg"} // Imagen del usuario
              showComment={true} // Habilitar sección de comentarios
              initialLikeCount={comment.likes_count}
            />

        ))
        
        ) : (
          <p>You have not commented on any posts yet.</p>
        )}
      </div>
    </PageLayout>
  );
}

export default CommentsProfile;
