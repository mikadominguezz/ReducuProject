import React, { useState } from 'react';
import Header from '../Components/Header';
import Menu from '../Components/Menu';
import RightSidebar from '../Components/RightSidebar';
import BackButton from '../Components/BackButton';
import PageLayout from '../Components/PageLayout';

function MakePost({ initialImage, initialText }) {
    const [text, setText] = useState(initialText || "");
    const [image, setImage] = useState(initialImage || "");

    const canPost = (text && text.trim() !== "") || image;

    return (
        <PageLayout>
            <div className='main'>
                {/* Title */}
                <div className='title'>
                    <BackButton/>
                    <h2>Make a Post/Comment</h2>
                </div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop: "15px"
                }}>
                    <div className='box' style={{
                        width: '35rem',
                        height: '32rem'
                    }}>
                        <h2 style={{
                            fontWeight: '550'
                        }}>
                            NEW POST
                        </h2>
                        
                        {/* Add comment */}
                        <div className='box'>
                            <textarea
                                className="form-control"
                                rows="9"
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                            />
                        </div>

                        {/* Add Picture input */}
                        <div>
                            {image ? (
                                <img src={image} alt="Post" style={{ width: "30rem", height: "auto", borderRadius: '10px' }} />
                            ) : (
                                <input className='box' type="url" placeholder="Enter image URL"
                                    style={{
                                        height: '3rem',
                                        padding: '0.5rem'
                                    }}
                                    value={image}
                                    onChange={(e) => setImage(e.target.value)}
                                />
                            )}
                        </div>

                        {/* Post button */}
                        <div style={{
                            paddingTop: '20px'
                        }}>
                            <button className="btn btn-lg text-white mb-3" style={{
                                    paddingLeft: "7rem",
                                    paddingRight: "7rem",
                                    backgroundColor: canPost ? "#173363" : "grey",
                                }}
                                disabled={!canPost}
                            >
                                Post
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}

export default MakePost;
