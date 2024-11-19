import React from 'react';
import BackButton from '../Components/BackButton';
import PageLayout from '../Components/PageLayout';
import PropTypes from 'prop-types';

function LikesProfile({ likes }) {
  return (
    <PageLayout>
      <div className="main">
        <div className="title">
          <BackButton />
          <h2>Things You've Liked</h2>
        </div>
        <div className="likes-list">
          {likes && likes.length > 0 ? (
            <ul>
              {likes.map((like) => (
                <li key={like.like_id}>{like.content}</li>
              ))}
            </ul>
          ) : (
            <p>You haven't liked anything yet.</p>
          )}
        </div>
      </div>
    </PageLayout>
  );
}

LikesProfile.propTypes = {
  likes: PropTypes.arrayOf(
    PropTypes.shape({
      like_id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default LikesProfile;
