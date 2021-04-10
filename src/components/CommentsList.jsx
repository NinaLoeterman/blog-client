import axios from "axios";
import React, { useState, useEffect } from "react";

const CommentsList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  const fetchData = async () => {
    const res = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`
    );
    setComments(res.data);
  };

  const renderedComments = comments.map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <ul>{renderedComments}</ul>
    </div>
  );
};

export default CommentsList;
