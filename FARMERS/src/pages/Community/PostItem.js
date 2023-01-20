import { Link } from 'react-router-dom';
import { addLike, removeLike, deletePost } from '../../actions/post/post';
import formatDate from '../../utils/formatDate';

const PostItem = (props) => {
  const { post } = props;

  return (
    <div>Post Item</div>
    // <div className="post bg-white my-1 p-1">
    //   <div>
    //     <Link to={`/profile/${user}`}>
    //       <img src={avatar} alt="Github DP instead of Gravatar" className="round-img" />

    //       <h4>{name}</h4>
    //     </Link>
    //   </div>

    //   <div>
    //     <p className="my-1">{text}</p>

    //     <p className="post-date">Posted on {formatDate(date)}</p>

    //     {showActions && (
    //       <>
    //         <button onClick={(e) => addLike(_id)} type="button" className="btn btn-light">
    //           <i className="fas fa-thumbs-up" /> <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
    //         </button>

    //         <button onClick={(e) => removeLike(_id)} type="button" className="btn btn-light">
    //           <i className="fas fa-thumbs-down" />
    //         </button>

    //         <Link to={`/posts/${_id}`} className="btn btn-primary">
    //           Discussion {comments.length > 0 && <span className="comment-count">{comments.length}</span>}
    //         </Link>

    //         {!auth.loading && user === auth.user._id && (
    //           <button onClick={(e) => deletePost(_id)} type="button" className="btn btn-danger">
    //             <i className="fas fa-times" />
    //           </button>
    //         )}
    //       </>
    //     )}
    //   </div>
    // </div>
  );
};

export default PostItem;
