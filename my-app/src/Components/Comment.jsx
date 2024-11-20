import React, { useState } from 'react';
import Heart from "react-heart";
import { useAuth0 } from "@auth0/auth0-react";
import CommentSection from "./CommentSection";

function Comment({ imageUrl, text}) {
    const { user } = useAuth0();
    const [active, setActive] = useState(false);
    const [likeCount, setLikeCount] = useState(0);


    const handleHeartClick = () => {
        setActive(!active);
        setLikeCount(prevCount => !active ? prevCount + 1 : prevCount - 1);
    };

    return (
        <div>
            {/* Box */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                paddingTop: "10px"
            }}>
                <button className="nonvisibleButton"
                    style={{
                        paddingRight: "10px"
                    }}>
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

                <div style={{
                    border: '2px solid black',
                    borderRadius:'10px',
                    width: '30rem',
                    height: 'auto'
                }}>
                    <div style={{
                        padding: "0.5rem"
                    }}>
                        {text && <h3>{text}</h3>}
                    </div>

                    {imageUrl && (
                        <img src={imageUrl} alt="imagen debajo del comentario"
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

            {/* Likes & Comment(s) */}
            <div style={{
                display: "flex",
                paddingLeft: "5rem",
                gap: "0.5rem",
                alignItems: "center"
            }}>
                <div style={{ width: "2rem", paddingTop: "0.35rem" }}>
                    <Heart isActive={active} onClick={handleHeartClick} />
                </div>
                
                {/* Contador de likes */}
                <span>{likeCount}</span>
            </div>
        </div>
    );
}

export default Comment;
