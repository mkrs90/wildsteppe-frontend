import { useState, useEffect } from "react";
import axios from "axios";

function Map({ trail }) {
  const [map, setMap] = useState([]);
  
    let lat = trail.latitude;
    let lon = trail.longitude;
  
  let imageUrl =
    `https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/static/${lon},${lat},14,0/300x200?access_token=pk.eyJ1IjoiaWRldmlvdGxsYyIsImEiOiJjbGd3cHI3Nm8wMGYwM3NuNmc4MndheWQwIn0.2Yh2XU47c-9dbdTBeReiSw`;

  useEffect(() => {
    const getMap = async () => {
      const response = await axios.get();

      setMap(response.data);
    };
    console.log("I'm getting the map");
    getMap();
  }, []);

  console.log(map);

  return (
    <div>
      <img src={imageUrl} alt="Trailhead map" />
    </div>
  );
}

export default Map;
