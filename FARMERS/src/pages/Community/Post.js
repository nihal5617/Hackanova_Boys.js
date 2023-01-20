import { useEffect } from "react";
import {Box, Card, Grid} from '@mui/material'
import { getPosts } from "../../actions/post/post";
import PostItem from "./PostItem";
import PostForm from "./PostForm";

const Posts = (props) => {
  const {posts} = props
  console.log(posts)
  // useEffect(() => {
  //   getPosts();
  // }, [getPosts]);

  if(!posts) return <div>Loading...</div>
  return (
      <Box sx={{ mt: 2}}>
        <Grid container spacing={3}>
        {posts.map((post, index) => {
          return (
            <Grid item xs={12} sm={6} xl={4} key={index}>
              <PostItem post={post} />
            </Grid>
          );
        }
        )}
        </Grid>
      </Box>
  );
};

export default Posts
