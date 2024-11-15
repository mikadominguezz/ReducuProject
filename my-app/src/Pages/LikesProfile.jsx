import React from 'react';
import Header from "../Components/Header";
import Menu from '../Components/Menu';
import RightSidebar from '../Components/RightSidebar';
import BackButton from '../Components/BackButton';
import PageLayout from '../Components/PageLayout';

function LikesProfile() {
  return (
    <PageLayout>
      <div className='main'>
            <div className='title'>
                <BackButton/>
                <h2>Things You've Liked</h2>
            </div>
        </div>
    </PageLayout>
  );
}

export default LikesProfile;