import { useState, useEffect } from "react";
import axios from 'axios';
// import { API_URL, TRAIL_ENDPOINT } from "../services/auth.constants";

const BASE_URL = 'https://8000-mkrs90-wildsteppebacken-vpz7io4uhwz.ws-us94.gitpod.io/api';

export default function TrailPage({ trail_id }) {
    const [trailDetails, setTrailDetails] = useState([]);

    useEffect(() => {
        const getTrailDetails = async () => {
            let config = {
                url: '/trails/',
                baseURL: BASE_URL,
                method: 'get'
            }
            let response = await axios.request(config);
            console.log(response);
            setTrailDetails(response.data);
        }
        getTrailDetails();
    }, [])


    return (
        <div className="container m-5">
            <div>
                {trailDetails.filter(trail => trail.id === {trail_id}).map(trail => (
                        <TrailDetailCard key={trail.id} trail={trail} />
                ))}
            </div>
        </div>
    )
}

export const TrailDetailCard = ({ trail }) => {
    return (
        <>
            <div className="container p-2" id="trailPage_Card">
                <div id="trailPage_header" className="position-absolute bottom-50 start-0 ms-5">
                        <div id="trail_title" className="ms-5">{trail.name}</div>
                        <div id="trail_title_subtext" className="ms-5">
                            <div>Trial Rating</div>
                            <div>Difficulty: Easy</div>
                            <div>{trail.location}</div>
                        </div>
                        
                </div>
                
            </div>
            <div>
                <p>{trail.description}</p>
                <div>{trail.distance}</div>
                <div>{trail.duration}</div>
            </div>
        </>
    )
}