import React from "react";
import WeTextBox from "./WeTextBox";
import "./CSS/Feed.css";
import Post from "./Post";


const Feed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("/api/questions")
      .then((res) => {
        console.log(res.data.reverse());
        setPosts(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="feed">
      <WeTextBox />
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}

      {/* <Post />
      <Post />
      <Post />
      <Post />
      <Post /> */}
    </div>
  );
};

export default Feed;
