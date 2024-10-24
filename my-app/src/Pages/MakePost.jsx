import React from 'react';
import Header from '../Components/Header';
import Menu from '../Components/Menu';
import RightSidebar from '../Components/RightSidebar';
import { start } from '@popperjs/core';

function MakePost() {
  return (
    <div style={{
        display: 'grid',
        gridTemplateColumns: '200px 1fr 150px',
        gridTemplateRows: 'auto 1fr auto',
        gap: '10px',
        backgroundColor: '#667895',
        height: '100vh',
        padding: '0px',
        boxSizing: 'border-box'
      }}>
        <Header></Header>

        <Menu></Menu>

        {/* Main */}
        <div style={{
            gridColumn: '2 / 3',
            gridRow: '2 / 3',
            backgroundColor: 'white',
            padding: '10px',
            fontFamily: 'Open Sans, sans-serif',
            borderRadius:'20px'
        }}>
            {/* Title */}
            <div style={{
                display: 'flex',
                justifyContent: 'center'
            }}>
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
                    borderRadius:'10px',
                    width: '35rem',
                    height: '32rem'
                }}>
                    <h2 style={{display:'flex', justifyContent: 'center', fontWeight: '550', paddingTop:'10px'}}>NEW POST</h2>
                    {/* Add comment */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingTop: "10px"
                    }}>
                        <div style={{
                            border: '2px solid black',
                            borderRadius:'10px',
                            gridColumn: '2 / 3',
                            width: '30rem',
                            height: '15rem'
                        }}>
                            <div style={{
                                padding: "0.5rem"
                            }}>
                                <h5 style={{opacity:'40%'}}>Comment...</h5>
                            </div>
                        </div>
                    </div>
                    
                    {/* Add Picture button */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingTop: "10px"
                    }}>
                        
                        <button style={{
                            border: '2px solid black',
                            borderRadius:'10px',
                            gridColumn: '2 / 3',
                            width: '30rem',
                            height: '5rem',
                            background: 'transparent'
                        }}>
                            <div style={{
                                padding: '0.5rem'
                            }}>
                                <h5 style={{
                                    opacity:'40%',
                                    display:'flex',
                                    justifyContent:'start',
                                    paddingBottom:'40px'
                                }}>
                                    Add picture
                                </h5>
                            </div>
                        </button>
                    </div>

                    {/* Post button */}
                    <div style={{
                        display:'flex',
                        justifyContent:'center',
                        paddingTop:'35px'
                    }}>
                        <button className="btn btn-lg text-white rounded-0 mb-3" style={{
                                paddingLeft:"7rem",
                                paddingRight:"7rem",
                                backgroundColor: "#173363",
                            }}>
                                Post
                        </button> 
                    </div>

                </div>
            </div>
        </div>

        <div style={{
            display: 'flex',
            alignItems: 'end'
        }}>
            <RightSidebar></RightSidebar>
        </div>
    </div>
  );
}

export default MakePost;