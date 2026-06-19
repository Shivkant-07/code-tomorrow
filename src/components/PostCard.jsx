import React from "react";

const PostCard = ({ post, onDelete }) => {
    return (
        <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px', borderRadius: '8px' }}>
            <button onClick={onDelete} style={{ float: 'right', color: 'red', cursor: 'pointer' }}>X</button>
            <img 
                src={`https://picsum.photos/300/200?random=${post.id}`} 
                alt="post" 
                style={{ width: '100%', borderRadius: '5px' }} 
            />
            <h3>{post.title.slice(0, 20)}...</h3>
            <p>{post.body.slice(0, 50)}...</p>
            <small>Posted on: 21 Dec 2020 14:57 GMT</small>
        </div>
    );
};

export default PostCard;