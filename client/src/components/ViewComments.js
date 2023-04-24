import { useEffect, useState } from "react";
import { API_URL, COMMENT_ENDPOINT } from "../services/auth.constants";
import axios from "axios";
import birdIcon from "../Images/bird_icon.png";

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
            <div>
                {reviews
                .filter(r => r.trail.id === trailId)
                .map((reviews) => <CommentCard key={reviews.id} review={reviews}/>)}
            </div>
        </div>
    )
}

export const CommentCard = ({ review }) => {
    const formatDate = (rd) => {
        const date = new Date(rd);
        const monthNames =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const formattedDate = `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
        return formattedDate;
    }

    const createStars = (sr) => {
        const stars = [];
        for (let i = 0; i < sr; i++) {
            stars.push(<i className="fa fa-solid fa-star" id="rating_star"></i>)
        }
        return stars;
    }
    // <i class="fa-solid fa-star" style="color: #1d4790;"></i>

    return (
        <div id="comment_container" className="border-bottom">
            <div className="row mt-3">
                <div className="col-1 ms-3 mt-1">
                    <img src={birdIcon} alt="icon" id="userImg" />
                </div>
                <div className="col-10 float-start">
                    <div id="comment_textBold">{review.user.first_name}</div>
                    <div>{formatDate(review.date)}</div>
                </div>
            </div>
            <div className="row">
               <div id="comment_stars" className="ms-3">{createStars(review.stars)}</div> 
            </div>
            
            <div id="comment_text" className="ms-3">{review.text}</div>
        </div>
    )
}

export default ViewComments;