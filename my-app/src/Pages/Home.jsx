import React, { useState, useEffect } from 'react';
import '../Components/Style.css';
import BackButton from '../Components/BackButton';
import PageLayout from '../Components/PageLayout';
import { getAllPosts } from '../Utils/axiosClient';

function Home() {
  const [posts, setPosts] = useState([]); // Inicializa como array vacío
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsData = await getAllPosts();
        console.log('Posts obtenidos desde el servidor:', postsData); // Verifica los datos
        setPosts(postsData); // Guarda los posts en el estado
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError('Error al cargar los posts');
      }
    };

    fetchPosts();
  }, []);

  return (
    <PageLayout>
      <div className='main'>
        <div className='title'>
          <BackButton />
          <h2>Home</h2>
        </div>
        <div className="posts">
          {Array.isArray(posts) && posts.length > 0 ? (
            posts.map((post) => (
              <div key={post.post_id} className="post">
                <h3>{post.content}</h3>
                {post.img && <img src={post.img} alt="Post" />}
                <p>Autor: {post.created_by}</p>
                <p>Likes: {post.likes_count}</p>
              </div>
            ))
          ) : (
            <p>No hay posts disponibles</p>
          )}
        </div>
      </div>
    </PageLayout>
  );
}

export default Home;
