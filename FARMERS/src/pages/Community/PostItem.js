import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { deletePost } from '../../actions/post/post';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function PostItem({post}) {

  console.log(post)

  const [like, setLike] = React.useState(false);

  const handleLike = () => {
    setLike(!like);
  };

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    try{
      dispatch(deletePost(id));
    }catch(error){
      console.log(error);
    }
  };

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ width:'100%', maxHeight:'500px', height:'100%'}}>
      <Link to={`/dashboard/post/${post._id}`} style={{textDecoration:'none', color:'black'}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {post.name[0]}
          </Avatar>
        }
        title={post.name}
        subheader={post.date.slice(0, 10)}
      />
      <CardMedia
        sx={{mt:1}}
        component="img"
        height="194"
        image={post.image}
        alt={post.image}
      />
      <CardContent>
      <Typography variant="h3" color="text.secondary">
          {post.title}
        </Typography>
        <Typography variant="h5" color="text.disabled">
          {post.desc}
        </Typography>
      </CardContent>
      </Link>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          {like ? <FavoriteIcon onClick={() => handleLike()} fontSize="large" /> : <FavoriteBorderIcon onClick={() => handleLike()} fontSize="large" />}
        </IconButton>
        <IconButton aria-label="share">
          <DeleteIcon onClick={() => handleDelete(post._id)} fontSize="large" />
        </IconButton> 
      </CardActions>
    </Card>
  );
}