import React from 'react';
import Comment from './Comment';
import CommentSection from './CommentSection';

function Post({ postId, text, imageUrl, initialLikeCount }) {
  return (
    <div>
      <Comment
        text={text}
        imageUrl={imageUrl}
        commentId={postId}
        showComment={true}
        initialLikeCount={initialLikeCount}
      />
      {/* Comment Section para cada post */}
      <CommentSection parentId={postId} isPost={true} />
    </div>
  );
}

export default Post;
