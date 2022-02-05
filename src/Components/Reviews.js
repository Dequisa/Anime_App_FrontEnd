import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../CSS/Reviews.css";

function Reviews() {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const getcomment = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/comments/${id}`);
        setComments(res.data);
        console.log("comment request: ", res.data);
      } catch (err) {
        console.log("Error Response from anime Search request", err);
      }
    };
    getcomment();
  }, [id]);

  return (
    <div className="reviews">
      <h2>Reviews</h2>
      <div className="reviewSection">
        {comments.map((comment) => (
          <div key={comment.comment_id}>
            <div>Written By: {comment.commentor}</div>
            <div>Title {comment.title}</div>
            <div>{comment.comment}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
