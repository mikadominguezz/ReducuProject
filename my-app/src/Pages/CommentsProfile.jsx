import React from 'react';
import Header from "../Components/Header";
import Menu from "../Components/Menu";
import RightSidebar from '../Components/RightSidebar';
import Comment from '../Components/Comment';

function CommentsProfile() {
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
            <div style={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <h2>Comments You've Made</h2>
            </div>
            
            {/* Comments */}
            <Comment></Comment>
            
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

export default CommentsProfile;