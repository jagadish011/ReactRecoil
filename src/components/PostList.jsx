import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { fetchPostsSelector, postsState } from "../recoil/atoms";

const PostList = () => {
  const [posts, setPosts] = useRecoilState(postsState);
  const fetchedPosts = useRecoilValue(fetchPostsSelector);

  useEffect(() => {
    setPosts(fetchedPosts);
  }, [fetchedPosts, setPosts]);
  return (
    <div style={{ padding: "20px", backgroundColor: "#f9f9f9" }}>
      <h2 style={{ color: "#333", textAlign: "center" }}>Posts</h2>
      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            margin: "20px 0",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "5px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ margin: "0 0 10px", color: "#007BFF" }}>{post.title}</h3>
          <p style={{ margin: "0", color: "#555" }}>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
