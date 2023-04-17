import { useState, useEffect } from "react";
import axios from 'axios';

const BASE_URL = 'https://8000-mkrs90-wildsteppebacken-vpz7io4uhwz.ws-us94.gitpod.io/api'

function Activity() {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        const getActivities = async () => {
            let config = {
                url: '/activities/',
                baseURL: BASE_URL,
                method: 'get'
            }
            let response = await axios.request(config);
            setActivities(response.data);
        }
        getActivities();
    }, [])
console.log(activities)
    return (
        <div>
            {activities.map((a) => <h3>{a.name}</h3>)}
        </div>
    )
}

export default Activity;