import React from 'react';
import Header from "../Components/Header";
import Menu from '../Components/Menu';
import RightSidebar from '../Components/RightSidebar';

function LikesProfile() {
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
                <h2>Things You've Liked</h2>
            </div>
        </div>

        <div className='rightSidebar'>
            <RightSidebar></RightSidebar>
        </div>
    </div>
  );
}

export default LikesProfile;