import React from 'react';
import Post from '../Components/Post';
import BackButton from '../Components/BackButton';
import PageLayout from '../Components/PageLayout';
import PropTypes from 'prop-types';

function PostsProfile({ posts }) {
  return (
    <PageLayout>
      <div className="main">
        <div className="title">
          <BackButton />
          <h2>Posts You've Made</h2>
        </div>

        {posts && posts.length > 0 ? (
          posts.map((post) => (
            <Post key={post.post_id} title={post.title} content={post.content} />
          ))
        ) : (
          <p>You have not created any posts yet.</p>
        )}
      </div>
    </PageLayout>
  );
}

PostsProfile.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      post_id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PostsProfile;
