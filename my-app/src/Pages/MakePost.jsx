import React from 'react';
import Header from '../Components/Header';
import Menu from '../Components/Menu';
import RightSidebar from '../Components/RightSidebar';

function MakePost({ image, text }) {
    // Verificar si el botón de "Post" debe estar habilitado
    const canPost = (text && text.trim() !== "") || image;

    return (
        <div className='webGeneral'>
            <Header />
            <Menu />

            {/* Main */}
            <div className='main'>
                {/* Title */}
                <div className='title'>
                    <h2>Make a Post/Comment</h2>
                </div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop: "15px"
                }}>
                    <div style={{
                        border: '2px solid black',
                        borderRadius: '10px',
                        width: '35rem',
                        height: '32rem'
                    }}>
                        <h2 style={{
                            display: 'flex',
                            justifyContent: 'center',
                            fontWeight: '550',
                            paddingTop: '10px'
                        }}>
                            NEW POST
                        </h2>
                        
                        {/* Add comment */}
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingTop: "10px"
                        }}>
                            <div style={{
                                border: '2px solid black',
                                borderRadius: '10px',
                                width: '30rem',
                                height: '14.7rem'
                            }}>
                                <textarea className="form-control" rows="9" value={text} readOnly></textarea>
                            </div>
                        </div>

                        {/* Add Picture button */}
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingTop: "10px"
                        }}>
                            {image ? (
                                <img src={image} alt="Post" style={{ width: "30rem", height: "auto", borderRadius: '10px' }} />
                            ) : (
                                <button 
                                    style={{
                                        border: '2px solid black',
                                        borderRadius: '10px',
                                        width: '30rem',
                                        height: '5rem',
                                        background: 'transparent'
                                    }}
                                >
                                    <div style={{ padding: '0.5rem' }}>
                                        <h5 style={{
                                            opacity: '40%',
                                            display: 'flex',
                                            justifyContent: 'start',
                                            paddingBottom: '40px'
                                        }}>
                                            Add picture
                                        </h5>
                                    </div>
                                </button>
                            )}
                        </div>

                        {/* Post button */}
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            paddingTop: '35px'
                        }}>
                            <button className="btn btn-lg text-white rounded-0 mb-3" style={{
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

            <div className='rightSidebar'>
                <RightSidebar />
            </div>
        </div>
    );
}

export default MakePost;
