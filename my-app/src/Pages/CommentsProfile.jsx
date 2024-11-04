import React from 'react';
import Header from "../Components/Header";
import Menu from "../Components/Menu";
import RightSidebar from '../Components/RightSidebar';
import Comment from '../Components/Comment';

function CommentsProfile() {
    
  return (
    <div className='webGeneral'>
        <Header></Header>

        <Menu></Menu>

        {/* Main */}
        <div className='main'>
            <div className='title'>
                <h2>Comments You've Made</h2>
            </div>
            
            {/* Comments */}
            <Comment showComment={true}/>
            
        </div>

        <div className='rightSidebar'>
            <RightSidebar></RightSidebar>
        </div>
    </div>
  );
}

export default CommentsProfile;