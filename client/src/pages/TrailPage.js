import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
// import { API_URL, TRAIL_ENDPOINT } from "../services/auth.constants";

const BASE_URL =
  "https://8000-mkrs90-wildsteppebacken-vpz7io4uhwz.ws-us94.gitpod.io/api";

export default function TrailPage() {
  const { id } = useParams();
  const [trailDetails, setTrailDetails] = useState([]);
  useEffect(() => {
    const getTrailDetails = async () => {
      let config = {
        url: `/trails/${id}`,
        baseURL: BASE_URL,
        method: "get",
      };
      let response = await axios.request(config);
      console.log(response);
      setTrailDetails(response.data);
    };
    getTrailDetails();
  }, [id]);

  return (
    <div id="trailPage_detailsCard" className="container m-5 border border-dark p-2">
      <div>
        <TrailDetailCard key={trailDetails.id} trail={trailDetails} />
      </div>
    </div>
  );
}


export const TrailDetailCard = ({ trail }) => {

  return (
    <>
      <div className="container-fluid" id="trailPage_Card">
        <div
          id="trailPage_header"
          className="position-absolute bottom-50 start-0 ms-5"
        >
          <div id="trail_title" className="ms-5">
            {trail.name}
          </div>
          <div id="trail_title_subtext" className="ms-5">
            <div>Trial Rating</div>
            <div>Difficulty: {trail.difficulty?.name}</div>
            <div>{trail.location}</div>
          </div>
        </div>
      </div>
      <div>
        <div id="trailPage_description" className="mt-5 p-2">
          <div className="border-bottom">Description</div>
          <p className="mt-2">{trail.description}</p>
        </div>
        <div>
          <div>Distance: {trail.distance}miles</div>
          <div>Estimated Duration: {trail.duration}hrs</div>
        </div>
      </div>
    </>
  );
};
