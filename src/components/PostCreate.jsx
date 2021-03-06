import React, { useState } from "react";
import axios from "axios";

const PostCreate = () => {
  const [title, setTitle] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:4000/posts", { title });
    setTitle("");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="form-control"
            type="text"
          />
        </div>
        <button
          //   onClick={(e) => setTitle(e.target.value)}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostCreate;
