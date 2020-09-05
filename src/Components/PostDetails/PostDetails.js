import React ,{ useState, useEffect }from 'react';
import { useParams, Link } from 'react-router-dom';
import Comments from '../Comments/Comments';

const PostDetails = () => {
    let {id} = useParams();
    const [post, setPost] = useState({});
    useEffect(() => {
        let url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])

    const [comments, setComments] = useState([]);
    useEffect(() => {
        let url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setComments(data))
    }, [])

    console.log(comments);
    const divStyle = {
        border : '1px solid #990033',
        padding : '20px',
        margin : '20px auto',
        width : '800px',
        borderRadius : '20px' ,
        color : 'white',
        
    }
    const btnStyle = {
        color: 'white',
        padding: '10px 20px',
        backgroundColor: '#990033',
        float:'right'
    }
    return (
        <div style = {divStyle}>
        <h1> <u>Post No:</u>  {post.id}</h1>
        <Link to={`/home`} style={{ textDecoration: 'none' }}>
        <button style={btnStyle}>Go Back to Home</button>
        </Link>
     
            <h2><u>Title:</u>  {post.title} </h2>
            <h3>{post.body} </h3> <br/>
            <h2 style={{textAlign:'center'}}><u>Comments</u></h2>
            {
                comments.map(comments => <Comments comments={comments} key={comments.id}></Comments>)
            }
        </div>
    );
};

export default PostDetails;