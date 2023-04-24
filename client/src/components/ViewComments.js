import { useEffect, useState } from "react";
import { API_URL, COMMENT_ENDPOINT } from "../services/auth.constants";
import axios from "axios";

function ViewComments({ trailId }) {
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
    }, [])

    return (
        <div>
            Here are the comments!
            <div>
                {reviews
                .filter(r => r.trail.id === trailId)
                .map((reviews) => <CommentCard key={reviews.id} review={reviews}/>)}
            </div>
        </div>
    )
}

export const CommentCard = ({ review }) => {
    return (
        <>
            <div>user {review.user.first_name}</div>
            <div>Date Visited {review.date}</div>
            <div>Rating {review.stars}</div>
            <div>Review: {review.text}</div>
        </>
    )
}

export default ViewComments;