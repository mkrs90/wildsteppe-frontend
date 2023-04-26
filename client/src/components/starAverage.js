import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL, COMMENT_ENDPOINT } from "../services/auth.constants";

function StarAverage({ trailId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      let config = {
        url: COMMENT_ENDPOINT,
        baseURL: API_URL,
        method: "get",
      };
      let response = await axios.request(config);
      setReviews(response.data);
    };
    getReviews();
  }, []);

  let filteredReviews = reviews.filter((r) => r.trail.id === trailId);
  return (
    <div>
      <div>
        <GetAverage reviews={filteredReviews} />
      </div>
    </div>
  );
}

export default StarAverage;

const GetAverage = ({ reviews }) => {
  const [stars, setStars] = useState(0);

  let sum = 0;
  useEffect(() => {
    reviews?.forEach((review) => {
      sum += review.stars;
    });
    const average = sum / reviews.length;
    setStars(average);
  }, [reviews]);

  console.log(stars);

  const createStars = (sr) => {
    const stars = [];
    for (let i = 0; i < sr; i++) {
      stars.push(<i className="fa fa-solid fa-star" id="rating_star"></i>);
    }
    return stars;
  };

  return (
    <div className="row">
      <div id="rating_stars" className="ms-3">
        {createStars(stars)}
      </div>
    </div>
  );
};
