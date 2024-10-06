import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { postsState } from "../recoil/atoms";
import axios from "axios";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const setPosts = useSetRecoilState(postsState);

  const handelSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("https://jsonplaceholder.typicode.com/posts", {
      title,
      body,
      userId: 1,
    });
    setPosts((prevPosts) => [...prevPosts, res.data]);
    setTitle("");
    setBody("");
    console.log(res.data);
    alert("Post added successfully");
  };
  return (
    <form
      onSubmit={handelSubmit}
      style={{
        padding: "20px",
        border: "2px solid #ccc",
        borderRadius: "5px",
        backgroundColor: "#f9f9f9",
        width: "300px",
        margin: "0 auto",
      }}
    >
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        style={{
          display: "block",
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          border: "1px solid #ccc",
          borderRadius: "3px",
        }}
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Body"
        style={{
          display: "block",
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          border: "1px solid #ccc",
          borderRadius: "3px",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "3px",
          cursor: "pointer",
        }}
      >
        Add Post
      </button>
    </form>
  );
};

export default AddPost;
