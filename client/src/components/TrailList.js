import { useState, useEffect } from "react";
import axios from 'axios';

const BASE_URL = 'https://8000-mkrs90-wildsteppebacken-vpz7io4uhwz.ws-us94.gitpod.io/api'

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
            setTrails(response.data);
        }
        getTrails();
    }, [])


    return (
        <div className="container mt-5">
            <div id="trail_list_title" className="border-bottom">Trails Near You</div>
            <div className="row justify-content-evenly p-5">
                {trails.map(trail => {
                return <TrailCard trail={trail}/>
                })}
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
                        <a href="/trailPage" id="loginButton" className="btn">See the Trail</a>
                    </div>
            </div>
        </>
    )
}

export default TrailList;