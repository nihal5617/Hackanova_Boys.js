import { useEffect } from "react";
import {Box, Card} from '@mui/material'
import { getPosts } from "../../actions/post/post";
import PostItem from "./PostItem";
import PostForm from "./PostForm";

const Posts = (props) => {
  const {posts} = props
  // useEffect(() => {
  //   getPosts();
  // }, [getPosts]);

  if(!posts) return <div>Loading...</div>
  return (
    
    <Box>
      <Card sx={{ p: 2 }}>
      <PostForm />
        </Card>
      <Card sx={{ p: 2 , mt: 2}}>
        {posts.map((post) => (
          <PostItem key={post._id} post={post} />
        ))}
      </Card>
    </Box>
  );
};

export default Posts
