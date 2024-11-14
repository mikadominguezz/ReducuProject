import React from 'react';
import Header from '../Components/Header';
import Menu from '../Components/Menu';
import RightSidebar from '../Components/RightSidebar';
import Post from '../Components/Post';
import BackButton from '../Components/BackButton';

function PostsProfile() {

  return (
    <div className='webGeneral'>
      <Header></Header>

      <Menu></Menu>

      {/* Main */}
      <div className='main'>
        <div className='title'>
            <BackButton/>
            <h2>Posts You've Made</h2>
        </div>
          
        {/* Box */}
        <Post></Post>
      </div>

      <div className='rightSidebar'>
          <RightSidebar></RightSidebar>
      </div>
    </div>
  );
}

export default PostsProfile;