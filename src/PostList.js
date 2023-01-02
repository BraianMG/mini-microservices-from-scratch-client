import React, { useEffect, useState } from 'react'
import axios from "axios";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

const PostList = () => {
  const [posts, setposts] = useState({});

  const fetchPosts = async () => {
    const res = await axios.get('http://posts.com/posts');

    setposts(res.data)
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderPosts = Object.values(posts).map(
    post => {
      return (
        <div
          className='card'
          style={{width: '30%', marginBottom: '20px'}}
          key={post.id}
        >
          <div className='card-body'>
            <h3>{post.title}</h3>
            <CommentList comments={post.comments} />
            <CommentCreate postId={post.id} />
          </div>
        </div>
      )
    }
  );
  
  return (
    <div className='d-flex flex-row flex-wrap justify-content-between'>
      {renderPosts}
    </div>
  )
}

export default PostList
