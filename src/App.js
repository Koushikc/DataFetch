import "./styles.css";
import React, { useEffect, useState } from "react";

const App = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const handleFetch = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    };
    handleFetch();
  }, []);
  return (
    <div>
      <h1>Data Fetch from third party API</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default App;
