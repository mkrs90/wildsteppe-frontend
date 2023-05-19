import { useState, useEffect } from 'react';
// import { useParams } from "react-router-dom";
import axios from 'axios';

function ParkPage() {
    const myURL = new URL(window.location.href);
    console.log(myURL);
    const wholeCode = myURL.pathname;
    console.log(wholeCode);
    const parkCode = wholeCode.slice(-4)
    console.log(parkCode);
    const [parkDetail, setParkDetail] = useState([]);
    // curl -X GET "https://developer.nps.gov/api/v1/parks?parkCode=acad&limit=1&start=0&q=Acadia&api_key=uHGK2HcvCNT8QFSWFMVIFDwEMKogRc0hwHbihNJ7"
    // curl -X GET "https://developer.nps.gov/api/v1/parks?limit=1&start=0&q=Acadia&api_key=uHGK2HcvCNT8QFSWFMVIFDwEMKogRc0hwHbihNJ7"
    useEffect(() => {
        const getParkDetail = async () => {
            try {
              let response = await axios.get(`https://developer.nps.gov/api/v1/parks`, {
                params: {
                  parkCode: parkCode,
                  limit: 1,
                  api_key: 'uHGK2HcvCNT8QFSWFMVIFDwEMKogRc0hwHbihNJ7'
                },
                headers: {
                  'Authorization': 'uHGK2HcvCNT8QFSWFMVIFDwEMKogRc0hwHbihNJ7'
                }
              });
      
              if (response.data && response.data.data && response.data.data.length > 0) {
                setParkDetail(response.data.data[0]);
              }
            } catch (error) {
              console.log('Error:', error);
            }
          };
      
          getParkDetail();
        }, [parkCode]);
    console.log(parkDetail);
        let parkImg = parkDetail?.images;
        let parkImgOne = parkImg[0];

    return (
        <>
      <div className="container-fluid text-center" id="trailPage_Card" style={{
        backgroundImage: `url(${parkImgOne.url})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}>
        <div id="trailPage_header" className="position-relative">
          <div id="trail_title" >
            {parkDetail.name}
          </div>
          <div id="trail_title_subtext" className="row">
            {/* <div className="col-4 mt-1">Difficulty: {parkDetail.name}</div> */}
            {/* <div className="col-4 mt-1"><StarAverage trailId={trail.id} /></div> */}
            {/* <div className="col-4 mt-1">{trail.location}</div> */}
          </div>
        </div>
      </div>
      <div className="row">
        <div className=" col-9 mt-5 p-2">
          <div id="trailPage_text">
            <div id="trailPage_title" className=" ps-3 border-bottom">Description</div>
            <p className="mt-5 pb-5 ps-3 pe-3">{parkDetail.description}</p>
          </div>
          <div id="trailPage_comment_section">
            <div id="trailPage_title" className=" ps-3 border-bottom">Reviews</div>
            {/* <MakeComment trailId={trail.id}/> */}
            {/* <ViewComments trailId={trail.id}/> */}
          </div>
        </div>
        <div className="col-3 border-start mt-5 p-2">
          {/* <div><Map trail={trail} /></div> */}
          <div id="trailPage_title" className="border-bottom mt-3">Trail Stats</div>
          <div id="trailPage_text">
            {/* <div className="mt-3 mb-3">Distance: {trail.distance}miles</div> */}
            {/* <div className="mb-3">Estimated Time: {trail.duration}hrs</div> */}
            {/* <div>Dogs Allowed? {(trail.pets_allowed ? 'Yes' : 'No')}</div> */}
          </div>
          <div className="mt-5">
            <div id="trailPage_title" className="border-bottom">Activities</div>
            <div className="mt-3">
              {
                parkDetail.activities?.map(activity => (
                  <div key={activity.id} id="trailPage_text" className="mb-2">{activity.name}</div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </>
    )
}

export default ParkPage;