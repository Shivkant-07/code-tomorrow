import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setloading } from "./features/posts/postSlice";
import Posts from './features/posts/Posts';

function App() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(setloading(true));
    const timer = setTimeout(() => {
      dispatch(setloading(false));
    }, 5000);
    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <div className="App">
      {loading ? <h1>Loading...</h1> : <Posts />}
    </div>
  );
}

export default App;