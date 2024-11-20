import React from 'react';
import Header from "../Components/Header";
import Menu from "../Components/Menu";
import RightSidebar from '../Components/RightSidebar';
import Comment from '../Components/Comment';
import BackButton from '../Components/BackButton';

function CommentsProfile() {
    
  return (
    <div className='webGeneral'>
      <Header></Header>

      <Menu></Menu>

      {/* Main */}
      <div className='main'>
        <div className='title'>
          <BackButton/>
          <h2>Comments You've Made</h2>
        </div>
          
        {/* Comments */}
        <Comment text={"hola"} showComment={true}/>   
      </div>

      <div className='rightSidebar'>
        <RightSidebar></RightSidebar>
      </div>
    </div>
  );
}

export default CommentsProfile;