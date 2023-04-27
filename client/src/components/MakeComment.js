import { useState } from "react";
import { useGlobalState } from "../context/GlobalState";
import { Link } from "react-router-dom";
import { COMMENT_ENDPOINT } from "../services/auth.constants";
import request from "../services/api.request";
import Rating from 'react-rating';

function MakeComment({ trailId }) {
  const [state, dispatch] = useGlobalState();
  const [text, setText] = useState("");
  const [rating, setRating] = useState("");
  const [dateVisited, setDateVisited] = useState("");

  console.log(state.currentUser);

  const handleSubmitReview = (e) => {
    e.preventDefault();
    request({
      url: COMMENT_ENDPOINT,
      method: "post",
      data: {
        text: text,
        stars: rating,
        date: dateVisited,
        trail: trailId,
      },
    })
      .then((response) => {
        setText("");
        setRating("");
        setDateVisited("");
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    window.location.href = `/trail/${trailId}`;
    window.location.reload(true);
  };

  return (
    <div className="border-bottom">
      {!state.currentUser && (
        <Link to="/login" id="loginButton" className="nav-item btn me-5 float-end">
          Sign In To Leave Review
        </Link>
      )}
      {state.currentUser && (
        <>
          <form onSubmit={handleSubmitReview}>
            <div>
              <div >
                <label htmlFor="rating" id="reviewTitle" className="float-start ms-3 mt-4">Rating:</label>
              <Rating onClick={setRating} initialRating={rating} id="fastars" className="ms-1 mt-4" emptySymbol="fa fa-star-o fa-2x"
  fullSymbol="fa fa-star fa-2x"/>
              </div>
            </div>
            <div  >
              <label htmlFor="dateVisited" id="reviewTitle" className="mt-4 ms-3">Date Visited:</label>
              <input
                className="mb-3 me-4 ms-1 mt-4"
                type="date"
                id="dateVisited"
                name="dateVisited"
                required
                onChange={(e) => setDateVisited(e.target.value)}
              />
            </div>
            <div>
              <div>
                <textarea
                className="mb-3 ms-1"
                type="text"
                id="reviewTextBody"
                name="text"
                placeholder="Review the Trail..."
                onChange={(e) => setText(e.target.value)}
                required
              />
              </div>
            </div>
            <input
              type="submit"
              value="Submit Trail Review"
              id="loginButton" 
              className="nav-item btn"
            />
          </form>
        </>
      )}
    </div>
  );
}

export default MakeComment;
