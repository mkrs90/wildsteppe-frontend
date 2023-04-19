import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import trailPhoto from '../Images/trail_test_photo.jpg';

const BASE_URL =
  "https://8000-mkrs90-wildsteppebacken-vpz7io4uhwz.ws-us94.gitpod.io/api";

function TrailList() {
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    const getTrails = async () => {
      let config = {
        url: "/trails/",
        baseURL: BASE_URL,
        method: "get",
      };
      let response = await axios.request(config);
      const limitedData = response.data.slice(0, 3);
      setTrails(limitedData);
    };
    getTrails();
  }, []);

  return (
    <div className="container-fluid">
      <div className="container mt-5">
        <div id="trail_list_header" className="border-bottom">
          <p id="trail_list_title" className="">
            Trails Near You
          </p>
          <p className="float-end float-top">See More...</p>
        </div>
      </div>
      <div className="container mt-3">
        <div className="row justify-content-evenly p-2">
          {trails.map((trail) => (
            <TrailCard key={trail.id} trail={trail} />
          ))}
        </div>
      </div>
    </div>
  );
}

export const TrailCard = ({ trail }) => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={trailPhoto} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{trail.name}</h5>
          {/* <p className="card-text"></p> */}
          <NavLink to={`/trail/${trail.id}`} id="loginButton" className="btn">
            See the Trail
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default TrailList;
