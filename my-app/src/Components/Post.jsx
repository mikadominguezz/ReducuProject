import React, { useState, useEffect } from 'react';
import { getAllPosts, getPostsByUserId, deletePost } from '../Utils/axiosClient';
import '../Components/Style.css';
import CommentSection from './CommentSection';

function Post({ userId }) {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [openCommentSectionPostId, setOpenCommentSectionPostId] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                let postsData;
                if (userId) {
                    postsData = await getPostsByUserId(userId);
                } else {
                    postsData = await getAllPosts();
                }
                setPosts(postsData);
            } catch (err) {
                console.error('Error fetching posts:', err);
                setError('Error al cargar los posts');
            }
        };

        fetchPosts();
    }, [userId]);

    const toggleCommentSection = (postId) => {
        setOpenCommentSectionPostId((prevPostId) => (prevPostId === postId ? null : postId));
    };

    const handleDelete = async (postId) => {
        try {
            await deletePost(postId);
            setPosts((prevPosts) => prevPosts.filter((post) => post.post_id !== postId));
            alert('Post eliminado exitosamente.');
        } catch (err) {
            console.error('Error al eliminar el post:', err);
            alert('No se pudo eliminar el post. Inténtalo nuevamente.');
        }
    };

    return (
        <div className="posts">
            {error ? (
                <p>{error}</p>
            ) : Array.isArray(posts) && posts.length > 0 ? (
                posts.map((post) => (
                    <div key={post.post_id} className="post">
                        <h3>{post.content}</h3>
                        {post.img && <img src={post.img} alt="Post" />}
                        <p>Author: {post.created_by}</p>
                        <p>Likes: {post.likes_count}</p>

                        {/* Botón para abrir/cerrar el CommentSection */}
                        <div>
                            <button
                                style={{
                                    border: 'none',
                                    background: 'transparent',
                                }}
                                onClick={() => toggleCommentSection(post.post_id)}
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
                        </div>

                        {/* Botón para eliminar el post */}
                        <div style={{ marginTop: '10px' }}>
                            <button
                                style={{
                                    backgroundColor: 'transparent',
                                    padding: '5px 10px',
                                    borderRadius: '5px',
                                }}
                                onClick={() => handleDelete(post.post_id)}
                            >
                                Eliminar Post
                            </button>
                        </div>

                        {/* Mostrar CommentSection solo si el ID coincide */}
                        {openCommentSectionPostId === post.post_id && (
                            <div style={{ paddingTop: '1rem' }}>
                                <CommentSection postId={post.post_id} />
                            </div>
                        )}
                    </div>
                ))
            ) : (
                <p>No hay posts disponibles</p>
            )}
        </div>
    );
}

export default Post;
