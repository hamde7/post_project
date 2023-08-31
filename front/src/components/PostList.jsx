import {useState , useEffect} from 'react'
import Post from './post';
import Modal from './modal'
import NewPost from '../router/NewPost';
import classes from './PostList.module.css';
import { useLoaderData } from 'react-router-dom';
function PostList(){    
    const posts = useLoaderData();
    return (
        <>
            {posts.length > 0 && (<ul className={classes.posts}>
                {posts.map((ele)=> <Post key={ele.id} id={ele.id} text={ele.body} name={ele.auther}/>)}
            </ul>)}
            {posts.length ===0 &&(<div style={{textAlign:'center' ,color:'white'}}>
                    <h2>no posts yet</h2>
                    <p>start adding some </p>
            </div>)}
        </>
    );
}
export default PostList;