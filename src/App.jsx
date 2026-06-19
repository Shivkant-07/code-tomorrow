import { useEffect,useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchPosts ,setloading} from "./features/posts/postSlice";
import Posts from './features/posts/Posts'
function App(){
  const dispatch = useDispatch();
  const {loading} = useSelector((state)=>state.posts);
  useEffect(()=>{
    dispatch(setloading(true))
    dispatch(fetchPosts)
  const timer = setTimeout(()=>{
    dispatch(setloading(false))
  },5000)
  return ()=>clearTimeout(timer);
  },[dispatch])

  return(
    <div className="App">
      {loading ?(
        <div className="loader">Loading...</div>
      ):(
        <Posts/>
      )}

    </div>
  )
}

export default App