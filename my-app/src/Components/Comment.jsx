import React, { useState } from 'react';
import Heart from "react-heart";
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

function Comment({ imageUrl, showComment }) {
    const { user } = useAuth0();
    const [active, setActive] = useState(false);
    const navigate = useNavigate();
    
    const handleGoToCommentSection = () => {
        setTimeout(() => {
            navigate("/commentSection");
        });
    };

    return (
        <div>
            {/* Box */}
            <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    paddingTop: "10px"
                }}>
                
                <button className="btn btn-primary"
                    style={{
                        display: 'flex',
                        background: 'none',
                        border: 'none',
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
                    width: '35rem',
                    height: 'auto'
                }}>
                    <div style={{
                        padding: "0.5rem"
                    }}>
                        <h3>Qué sueño</h3>
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
                    paddingLeft: "19rem",
                    gap: "0.5rem"
                }}>
                <div style={{width: "2rem", paddingTop:"0.35rem"}}>
                    <Heart isActive={active} onClick={() => setActive(!active)}/>
                </div>

                {showComment && <button style={{
                    border: "none",
                    background: "transparent"
                }}
                    onClick={handleGoToCommentSection}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-message-circle" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M3 20l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c3.255 2.777 3.695 7.266 1.029 10.501c-2.666 3.235 -7.615 4.215 -11.574 2.293l-4.7 1" />
                    </svg>
                </button> }
                
            </div>
        </div>
    );
}

export default Comment;
