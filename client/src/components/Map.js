function Map() {
    MAP_URL = "https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-122.4587,37.7786,12.71,0/300x200?access_token="
    API_KEY = "pk.eyJ1IjoiaWRldmlvdGxsYyIsImEiOiJjbGd3cHI3Nm8wMGYwM3NuNmc4MndheWQwIn0.2Yh2XU47c-9dbdTBeReiSw"
    
    const [map, setMap ] = useState([]);

    useEffect(() => {
        const getMap = async () => {
            let config = {
                url: API_KEY,
                baseURL: MAP_URL,
                method: 'get'
            }
            let response = await axios.request(config);
            setMap(response.data);
        }
        getMap();
    }, [])
console.log(map)

    return (
        <div>

        </div>
    )
}