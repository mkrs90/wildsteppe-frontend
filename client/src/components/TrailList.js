import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { API_URL } from "../services/auth.constants";


function TrailList() {
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    const getTrails = async () => {
      let config = {
        url: "/trails/",
        baseURL: API_URL,
        method: "get",
      };
      let response = await axios.request(config);
      const limitedData = response.data.slice(0, 8);
      setTrails(limitedData);
    };
    getTrails();
  }, []);

  return (
    <div className="container">
      <div className="container mt-5">
        <div id="trail_list_header" className="border-bottom">
          <p id="trail_list_title" className="">
            See the trails
          </p>
        </div>
      </div>
      <div className="container-fluid mt-3">
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
      <div className="card mb-4 text-center" style={{ width: "18rem" }}>
        <img src={trail.image} id="trailCard_img" alt="..." />
        <div className="card-footer mt-auto">
          <h5 className="card-title">{trail.name}</h5>
          <h6>{trail.location}</h6>
          <h6>Difficulty: {trail.difficulty.name}</h6>
          <NavLink to={`/trail/${trail.id}`} id="loginButton" className="btn">
            See the Trail
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default TrailList;
