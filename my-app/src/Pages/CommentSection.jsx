import React from 'react';
import '../App.css';
import Header from "../Components/Header";
import Menu from "../Components/Menu";
import RightSidebar from '../Components/RightSidebar';
import Comment from '../Components/Comment';
import { useNavigate } from 'react-router-dom';

function CommentSection() {
    const navigate = useNavigate();
        
    const handleGoBack = () => {
        setTimeout(() => {
            navigate("/"); // editar para que vaya a atrás si está tanto en commentsProfile o cualquier otro
        },); 
    };
  return (
    <div className='webGeneral'>
        <Header></Header>

        <Menu></Menu>

        {/* Main */}
        <div className='main'>
            <div className='title'>
                <h2>Comment Section</h2>
            </div>
            
            {/* Comments */}
            <div>
                <Comment></Comment>
                <Comment></Comment>
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
                        width: '35rem',
                        height: '7.2rem'
                    }}>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                    </div>
                    {/* implementar diseño boton */}
                    <button>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#667895" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2">
                            <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"></path> 
                        </svg> 
                    </button>
                </div>
            </div>
            
            
        </div>

        <div className='rightSidebar'>
            <RightSidebar></RightSidebar>
        </div>
    </div>
  );
}

export default CommentSection;