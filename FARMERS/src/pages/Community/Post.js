import { useEffect } from "react";
import {Box} from '@mui/material'
import { getPosts } from "../../actions/post/post";
import PostItem from "./PostItem";
import PostForm from "./PostForm";

const Posts = (props) => {
  const {posts} = props
  console.log(posts);
  // useEffect(() => {
  //   getPosts();
  // }, [getPosts]);

  if(!posts) return <div>Loading...</div>
  return (
    <Box>
      <PostForm />
      <div className="posts">
        {posts.map((post) => (
          <PostItem key={post._id} post={post} />
        ))}
      </div>
    </Box>
  );
};

export default Posts

// const mapStateToProps = (state) => ({ post: state.post });

// export default connect(mapStateToProps, { getPosts })(Posts);
