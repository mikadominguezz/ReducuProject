import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Comment from './Comment';

function CommentSection({ parentId, isPost }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const endpoint = isPost
          ? `http://localhost:5001/api/comments/post/${parentId}`
          : `http://localhost:5001/api/comments/comment/${parentId}`;
        const response = await axios.get(endpoint);
        setComments(response.data);
      } catch (err) {
        console.error('Error fetching comments for this section:', err.message);
        setError('Failed to load comments for this section.');
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, [parentId, isPost]);

  const handleAddComment = async () => {
    if (!newComment.trim()) return;

    try {
      const endpoint = `http://localhost:5001/api/comments`;
      const response = await axios.post(endpoint, {
        content: newComment,
        created_by: 'user_example',
        original_id: parentId,
        original_type: isPost ? 'post' : 'comment',
      });

      setComments((prevComments) => [
        ...prevComments,
        {
          comment_id: response.data.comment_id,
          content: newComment,
          likes_count: 0,
          img: null,
        },
      ]);

      setNewComment('');
    } catch (err) {
      console.error('Error adding a new comment:', err.message);
    }
  };

  return (
    <div>
      <div className="main">
        <div className="subtitle">
          <h4>Comment Section</h4>
        </div>

        {/* Mostrar comentarios */}
        {loading ? (
          <p>Loading comments...</p>
        ) : error ? (
          <p>{error}</p>
        ) : comments.length > 0 ? (
          comments.map((comment) => (
            <Comment
              key={comment.comment_id}
              text={comment.content}
              initialLikeCount={comment.likes_count}
              showComment={false}
            />
          ))
        ) : (
          <p>No comments yet. Be the first to comment!</p>
        )}

        {/* Text Area Original */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '10px',
            paddingLeft: '3.5rem'
          }}
        >
          <div
            style={{
              border: '2px solid black',
              borderRadius: '10px',
              gridColumn: '2 / 3',
              width: '35rem',
              height: '7.2rem'
            }}
          >
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="4"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write your comment here..."
            ></textarea>
          </div>

          <button
            onClick={handleAddComment}
            style={{
              background: 'none',
              border: 'none',
              marginLeft: '10px',
            }}
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
