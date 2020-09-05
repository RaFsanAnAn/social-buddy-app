import React, { useState, useEffect } from 'react';
import AllPosts from '../AllPosts/AllPosts';
import Header from '../Header/Header';

const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    return (
        <div >
            <Header></Header>
            <h2 style = {{textAlign : 'center'}}>Total Posts Loaded : {posts.length}</h2>
            {
                posts.map(post => <AllPosts post={post} key={post.id}></AllPosts>)
            }
        </div>
    );
};

export default Home;