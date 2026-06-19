import { useEffect,useState } from "react";
import {useDispatch,useSelector} from 'react-redux'
import { fetchPosts,deletePost,setloading } from "./postSlice";
import PostCard from "../../components/PostCard";
export default function Posts(){
    const dispatch = useDispatch();
    const{items,loading} = useSelector((state)=>state.posts);
    const{currentPage,setCurrentPage} = useState(1);
    useEffect(()=>{
        dispatch(fetchPosts());
        setTimeout(()=>dispatch(setloading(false)),5000)
    },[dispatch])
    if(loading) return <h1>Loading...</h1>
    const start = (currentPage-1)*6;
    const currentPosts = items.slice(start,start + 6);
    return(
        <div>
            <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'10px'}}>
                {currentPosts.map(post =>(
                    <PostCard key={post.id}
                    post={post}
                    onDelete={()=>dispatch(deletePost(post.id))}
                    />
                ))}

            </div>
            <div style={{marginTop:'20px'}}>

            {[1,2,3,].map(num=>(
                <button key={num} onClick={()=>setCurrentPage(num)}>{num}</button>
            ))}
        </div>
        </div>
    )
}