import React from 'react';
import PostViewer from '../components/posts/PostViewer';
import HeaderContainer from '../containers/common/HeaderContainer';

const PostPage = () => {
  return (
    <>
      <HeaderContainer />
      <PostViewer />
    </>
  );
};

export default PostPage;
