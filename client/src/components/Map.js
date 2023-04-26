import { useState, useEffect } from "react";
import axios from "axios";

function Map() {
  const [map, setMap] = useState([]);

  // https://api.mapbox.com/styles/v1/{username}/{style_id}/static/{overlay}/{lon},{lat},{zoom},{bearing},{pitch}|{auto}|{bbox}/{width}x{height}{padding}{@2x}
  // https://api.mapbox.com/styles/v1/ideviotllc/outdoors-v11/static/-122.3486,37.8169,9,0/300x200?access_token=
  // pk.eyJ1IjoiaWRldmlvdGxsYyIsImEiOiJjbGd3cHI3Nm8wMGYwM3NuNmc4MndheWQwIn0.2Yh2XU47c-9dbdTBeReiSw
  const mapboxAccessToken =
    "pk.eyJ1IjoiaWRldmlvdGxsYyIsImEiOiJjbGd3cHI3Nm8wMGYwM3NuNmc4MndheWQwIn0.2Yh2XU47c-9dbdTBeReiSw";

  const [lat, setLat] = useState("37.795799");
  const [lon, setLon] = useState("-83.703979");
  //   let lat = "37.795799";
  //   let lon = "-83.703979";
  //   let imageUrl = `https://api.mapbox.com/styles/v1/ideviotllc/outdoors-v11/static/${lon},${lat},14,0/300x200?access_token=${mapboxAccessToken}`;
  let imageUrl =
    "https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/static/-83.703979,37.795799,14,0/300x200?access_token=pk.eyJ1IjoiaWRldmlvdGxsYyIsImEiOiJjbGd3cHI3Nm8wMGYwM3NuNmc4MndheWQwIn0.2Yh2XU47c-9dbdTBeReiSw";

  useEffect(() => {
    const getMap = async () => {
      // you will need to have a lon and lat set to each trail
      // and get that here
      // then save those values to lat and lon state values
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
