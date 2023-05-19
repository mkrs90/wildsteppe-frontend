import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from "react-router-dom";

function ParkList() {
    const [parkData, setParkData] = useState([]);
  
    useEffect(() => {
      const getPark = async () => {
        let config = {
        //   url:'?limit=50',
          baseURL: 'https://developer.nps.gov/api/v1/parks?limit=8&start=0&api_key=uHGK2HcvCNT8QFSWFMVIFDwEMKogRc0hwHbihNJ7',
          method: "get",
          headers: {
              'Authorization': 'uHGK2HcvCNT8QFSWFMVIFDwEMKogRc0hwHbihNJ7'
            }
          };
          try {
            let response = await axios.request(config);
            setParkData(response.data.data);
          } catch (error) {
            console.log('Error:', error);
          }
      };
      getPark();
    }, []);
    

    return (
        <div className="container">
        <div className="container mt-5">
          <div id="trail_list_header" className="border-bottom">
            <p id="trail_list_title" className="">
              See National Parks
            </p>
          </div>
        </div>
        <div className="container-fluid mt-3">
          <div className="row justify-content-evenly p-2">
            {parkData.map((park) => (
              <ParkCard key={park.id} park={park} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  export const ParkCard = ({ park }) => {
    return (
      <>
        <div className="card mb-4 text-center" style={{ width: "18rem" }}>
          <img src={park.images[0].url} id="parkCard_img" alt="..." />
          <div className="card-footer mt-auto">
            <h5 className="card-title">{park.name}</h5>
            <h6 id="">{park.addresses[0].city}, {park.addresses[0].stateCode}</h6>
            <NavLink to={`/park/${park.parkCode}`} id="loginButton" className="btn">
              See the Park
            </NavLink>
          </div>
        </div>
      </>
    );
};

export default ParkList;