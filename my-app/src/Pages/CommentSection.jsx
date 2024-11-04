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
            <div style={{
                display: 'flex',
                justifyContent: 'center'
            }}>
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
                    <button>
                        
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