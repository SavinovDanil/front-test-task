import React from 'react';

const Post = ({ post }) => {
  return (
    <div className="posts-block__post">
      <h3 className="posts-block__title">{post.title}</h3>
      <p className="posts-block__body">{post.body}</p>
    </div>
  );
};

export default Post;
