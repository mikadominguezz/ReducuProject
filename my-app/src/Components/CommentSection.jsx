import React from 'react';
import '../App.css';
import Header from "./Header";
import Menu from "./Menu";
import RightSidebar from './RightSidebar';
import Comment from './Comment';
import { useNavigate } from 'react-router-dom';

function CommentSection() {
    const navigate = useNavigate();
        
    const handleGoBack = () => {
        setTimeout(() => {
            navigate("/"); // editar para que vaya a atrás si está tanto en commentsProfile o cualquier otro
        },); 
    };
  return (
    <div>
        {/* Main */}
        <div className='main'>
            <div className='subtitle'>
                <h4>Comment Section</h4>
            </div>
            
            {/* Comments */}
            <div>
                <Comment showComment={false}/>
                <Comment showComment={false}/>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop: '10px',
                    paddingLeft: '7rem'
                }}>
                    <div style={{
                        border: '2px solid black',
                        borderRadius:'10px',
                        gridColumn: '2 / 3',
                        width: '35rem',
                        height: '7.2rem'
                    }}>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                    </div>

                    <button style={{
                        background: 'none',
                        border: 'none'
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#173363" stroke-linecap="round" stroke-linejoin="round" width="30" height="30" stroke-width="2"> <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"></path> </svg> 
                    </button>
                </div>
            </div>
            
            
        </div>
    </div>
  );
}

export default CommentSection;