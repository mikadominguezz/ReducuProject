import React from 'react';

function BackButton() {
    return (
        <button className='backButton' onClick={() => window.history.back()} style={{
            border: "none",
            backgroundColor: 'transparent'
        }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="32" height="32" strokeWidth="2"> <path d="M5 12l14 0"></path> <path d="M5 12l6 6"></path> <path d="M5 12l6 -6"></path> </svg> 
        </button>
    );
}

export default BackButton;
