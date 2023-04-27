import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { API_URL } from "../services/auth.constants";
import MakeComment from "../components/MakeComment";
import ViewComments from "../components/ViewComments";
import StarAverage from "../components/starAverage";
import Map from "../components/Map";

export default function TrailPage() {
  const { id } = useParams();
  const [trailDetails, setTrailDetails] = useState([]);
  useEffect(() => {
    const getTrailDetails = async () => {
      let config = {
        url: `/trails/${id}`,
        baseURL: API_URL,
        method: "get",
      };
      let response = await axios.request(config);
      console.log(response);
      setTrailDetails(response.data);
    };
    getTrailDetails();
  }, [id]);

  return (
    <div id="trailPage_detailsCard" className="container d-flex align-items-center justify-content-center mt-5 mb-5 border border-dark p-2">
      <div>
        <TrailDetailCard key={trailDetails.id} trail={trailDetails} />
      </div>
    </div>
  );
}


export const TrailDetailCard = ({ trail }) => {


  return (
    <>
      <div className="container-fluid text-center" id="trailPage_Card" style={{
        backgroundImage: `url(${trail.image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}>
        <div id="trailPage_header" className="position-relative">
          <div id="trail_title" >
            {trail.name}
          </div>
          <div id="trail_title_subtext" className="row">
            <div className="col-4 mt-1">Difficulty: {trail.difficulty?.name}</div>
            <div className="col-4 mt-1"><StarAverage trailId={trail.id} /></div>
            <div className="col-4 mt-1">{trail.location}</div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className=" col-9 mt-5 p-2">
          <div id="trailPage_text">
            <div id="trailPage_title" className=" ps-3 border-bottom">Description</div>
            <p className="mt-5 pb-5 ps-3 pe-3">{trail.description}</p>
          </div>
          <div id="trailPage_comment_section">
            <div id="trailPage_title" className=" ps-3 border-bottom">Reviews</div>
            <MakeComment trailId={trail.id}/>
            <ViewComments trailId={trail.id}/>
          </div>
        </div>
        <div className="col-3 border-start mt-5 p-2">
          <div><Map trail={trail} /></div>
          <div id="trailPage_title" className="border-bottom mt-3">Trail Stats</div>
          <div id="trailPage_text">
            <div className="mt-3 mb-3">Distance: {trail.distance}miles</div>
            <div className="mb-3">Estimated Time: {trail.duration}hrs</div>
            <div>Dogs Allowed? {(trail.pets_allowed ? 'Yes' : 'No')}</div>
          </div>
          <div className="mt-5">
            <div id="trailPage_title" className="border-bottom">Activities</div>
            <div className="mt-3">
              {
                trail.activities?.map(activity => (
                  <div key={activity.id} id="trailPage_text" className="mb-2">{activity.name}</div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
