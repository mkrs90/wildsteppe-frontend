import { useState } from "react";
import { useGlobalState } from "../context/GlobalState";
import { Link } from "react-router-dom";
import { COMMENT_ENDPOINT } from "../services/auth.constants";
import request from "../services/api.request";

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
        // created: Date.now(),
        // updated: Date.now(),
        // user: state.currentUser?.user_id,
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

    // axios
    //   .post(API_URL + COMMENT_ENDPOINT, {
    //     text: text,
    //     rating: rating,
    //     date: dateVisited,
    //     // created: Date.now(),
    //     // updated: Date.now(),
    //     user: state.currentUser?.user_id,
    //     trail: trailId,
    //   })
    //   .then((response) => {
    //     setText("");
    //     setRating("");
    //     setDateVisited("");
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // console.log("Review Submitted Maybe?");
    // window.location.href = `/trail/${trailId}`;
    // window.location.reload(true);
  };

  return (
    <div>
      {!state.currentUser && (
        <Link to="/login" id="loginButton" className="nav-item btn me-5 float-end">
          Sign In To Leave Review
        </Link>
      )}
      {state.currentUser && (
        <>
          <form onSubmit={handleSubmitReview}>
            <div>
              <label htmlFor="text">Review of Trail:</label>
              <input
                className="mb-3 ms-1"
                type="text"
                id="text"
                name="text"
                onChange={(e) => setText(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="rating">Rating:</label>
              <input
                className="mb-3 me-4 ms-1"
                type="number"
                min="1"
                max="5"
                id="rating"
                name="rating"
                required
                onChange={(e) => {
                  console.log("changed!", e.target.value);
                  setRating(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="dateVisited">Date:</label>
              <input
                className="mb-3 me-4 ms-1"
                type="date"
                id="dateVisited"
                name="dateVisited"
                required
                onChange={(e) => setDateVisited(e.target.value)}
              />
            </div>
            <input
              type="submit"
              value="Submit Trail Review"
              id="SubmitBtn"
              className="btn btn-primary mb-5"
            />
          </form>
        </>
      )}
    </div>
  );
}

export default MakeComment;
