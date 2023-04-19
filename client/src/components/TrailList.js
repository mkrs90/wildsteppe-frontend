import { useState, useEffect } from "react";
import axios from 'axios';
import TrailPage from "../pages/TrailPage";

const BASE_URL = 'https://8000-mkrs90-wildsteppebacken-vpz7io4uhwz.ws-us94.gitpod.io/api';

function TrailList() {
    const [trails, setTrails] = useState([]);

    useEffect(() => {
        const getTrails = async () => {
            let config = {
                url: '/trails/',
                baseURL: BASE_URL,
                method: 'get'
            }
            let response = await axios.request(config);
            const limitedData = response.data.slice(0, 3);
            setTrails(limitedData);
        }
        getTrails();
    }, [])


    return (
        <div className="container-fluid">
            <div className="container mt-5">
                <div id="trail_list_header" className="border-bottom">
                    <p id="trail_list_title" className="">Trails Near You</p>
                    <p className="float-end float-top">See More...</p>
                </div>
            </div>
            <div className="container mt-3">
                <div className="row justify-content-evenly p-2">
                    {trails.map(trail => {
                    return <TrailCard trail={trail}/>
                    })}
                </div>
            </div>
            
        </div>
    )
}

export const TrailCard = ({ trail }) => {
    return (
        <>
            <div className="card text-center" style={{width: '18rem'}}>
                <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{trail.name}</h5>
                        {/* <p className="card-text"></p> */}
                        <button id="loginButton" className="btn" href={<TrailPage trail_id={trail.id}/>}>See the Trail</button>
                        {/* <button href="/trailPage" id="loginButton" className="btn">See the Trail</button> */}
                    </div>
            </div>
        </>
    )
}

export default TrailList;