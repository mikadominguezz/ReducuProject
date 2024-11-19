import React from 'react';
import Header from "../Components/Header";
import Menu from "../Components/Menu";
import RightSidebar from '../Components/RightSidebar';
import Comment from '../Components/Comment';
import BackButton from '../Components/BackButton';
import PageLayout from '../Components/PageLayout';
import PropTypes from 'prop-types';

function CommentsProfile({ comments }) {
  return (
    <PageLayout>
      <div className="main">
        <div className="title">
          <BackButton />
          <h2>Comments You've Made</h2>
        </div>

        {comments && comments.length > 0 ? (
          comments.map((comment) => (
            <Comment
              key={comment.comment_id}
              text={comment.content}
              showComment={true}
            />
          ))
        ) : (
          <p>You have not commented on any posts yet.</p>
        )}
      </div>
    </PageLayout>
  );
}

CommentsProfile.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      comment_id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CommentsProfile;
