import React, { useState, useEffect } from "react";
import axios from "axios";
import Comment from "../Components/Comment";
import BackButton from "../Components/BackButton";
import PageLayout from "../Components/PageLayout";
import { useAuth0 } from "@auth0/auth0-react";

function PostsProfile() {
  const { user, isAuthenticated } = useAuth0();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      if (!isAuthenticated || !user?.nickname) {
        setError("You must be logged in to view your posts.");
        setLoading(false);
        return;
      }

      const nickname = user.nickname; // Usa el nickname del usuario
      console.log("Auth0 User Nickname:", nickname);

      try {
        const response = await axios.get(`http://localhost:5001/api/posts/user/${nickname}`);
        console.log("Response from backend (posts):", response.data);
        setPosts(response.data);
      } catch (err) {
        console.error("Error fetching posts:", err.response?.data || err.message);
        setError("Failed to load posts.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [isAuthenticated, user]);

  return (
    <PageLayout>
      <div className="main">
        <div className="title">
          <BackButton />
          <h2>Posts You've Made</h2>
        </div>

        {loading ? (
          <p>Loading posts...</p>
        ) : error ? (
          <p>{error}</p>
        ) : posts && posts.length > 0 ? (
          posts.map((post) => (
            <Comment
              key={post.post_id}
              commentId={post.post_id}
              text={post.content}
              imageUrl={post.img} // Los posts tienen imagen
              userImageUrl={"https://example.com/user-image.jpg"} // Imagen del usuario
              showComment={true} // Puedes habilitar sección de comentarios si lo necesitas
              initialLikeCount={post.likes_count}
            />
          ))
        ) : (
          <p>You have not created any posts yet.</p>
        )}
      </div>
    </PageLayout>
  );
}

export default PostsProfile;
