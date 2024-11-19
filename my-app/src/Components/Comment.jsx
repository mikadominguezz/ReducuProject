import React, { useState } from "react";
import Heart from "react-heart";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import CommentSection from "./CommentSection";

function Comment({ imageUrl, text, commentId, showComment, initialLikeCount }) {
    const { user } = useAuth0();
    const [showCommentSection, setShowCommentSection] = useState(false);
    const [active, setActive] = useState(false);
    const [likeCount, setLikeCount] = useState(initialLikeCount || 0);

    const toggleCommentSection = () => {
        setShowCommentSection(!showCommentSection);
    };

    const handleHeartClick = async () => {
        try {
            if (!active) {
                await axios.post(`http://localhost:5001/api/comments/like/${commentId}`);
                setLikeCount(prevCount => prevCount + 1);
            } else {
                // Opcional: Implementar unlike si es necesario
                await axios.post(`http://localhost:5001/api/comments/unlike/${commentId}`);
                setLikeCount(prevCount => prevCount - 1);
            }
            setActive(!active);
        } catch (error) {
            console.error("Error al actualizar el like:", error);
        }
    };

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center", paddingTop: "10px" }}>
                <button className="nonvisibleButton" style={{ paddingRight: "10px" }}>
                    <img
                        src={user.picture}
                        alt="Profile"
                        style={{
                            width: "52px",
                            height: "52px",
                            borderRadius: "50%",
                            objectFit: "cover"
                        }}
                    />
                </button>

                <div
                    style={{
                        border: "2px solid black",
                        borderRadius: "10px",
                        width: "35rem",
                        height: "auto"
                    }}
                >
                    <div style={{ padding: "0.5rem" }}>{text && <h3>{text}</h3>}</div>

                    {imageUrl && (
                        <img
                            src={imageUrl}
                            alt="imagen debajo del comentario"
                            style={{
                                padding: "10px",
                                width: "100%",
                                height: "auto",
                                objectFit: "cover"
                            }}
                        />
                    )}
                </div>
            </div>

            <div
                style={{
                    display: "flex",
                    paddingLeft: "19rem",
                    gap: "0.5rem",
                    alignItems: "center"
                }}
            >
                <div style={{ width: "2rem", paddingTop: "0.35rem" }}>
                    <Heart isActive={active} onClick={handleHeartClick} />
                </div>
                <span>{likeCount}</span>

                {showComment && (
                    <div>
                        <button
                            style={{
                                border: "none",
                                background: "transparent"
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
                    </div>
                )}
            </div>

            {showCommentSection && (
                <div style={{ paddingTop: "1rem" }}>
                    <CommentSection />
                </div>
            )}
        </div>
    );
}

export default Comment;

