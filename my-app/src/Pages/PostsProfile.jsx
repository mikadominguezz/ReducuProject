import React from 'react';
import Post from '../Components/Post';
import BackButton from '../Components/BackButton';
import PageLayout from '../Components/PageLayout';
import { useAuth0 } from '@auth0/auth0-react';

function PostsProfile() {
  const { user } = useAuth0();

  return (
    <PageLayout>
      <div className='main'>
        <div className='title'>
            <BackButton/>
            <h2>Posts You've Made</h2>
        </div>
        {/* Box */}
        <Post userId={user.name} />
      </div>
    </PageLayout>
  );
}

export default PostsProfile;