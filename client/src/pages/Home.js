import SiteLogo from '../Images/wildsteppe_logo.png';
import SiteName from '../Images/Wildsteppe_name.png';
import { Link } from "react-router-dom";

function Home() {

    // IMPORTANT THIS NEEDS TO CHANGE - IT IS ONLY SET UP SO I CAN NAVIGATE TO TRAIL PAGE BEFORE MAKING TABLE!!!
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            window.location = '/trailpage';
        }
    }

    return (
        <div id="splash_image" className='p-5'>
            <div id='searchBox' className='text-center m-5 p-3'>
                <div>
                    <img id="" src={SiteLogo} alt='site logo'/>    
                </div>
                <div className='mt-2'>
                    <img id="" className="" src={SiteName} alt='site name'/>
                </div>
                <div id='tag_line' className='mb-5' >Take A Step Into The Wild</div>
                <div id='search_bar' className='input-group mt-4'>
                    <input type="text" class="form-control" onKeyDown={handleKeyDown} placeholder="Enter City or Trail Name..."/>
                    <div class="input-group-append">
                        <button class="btn btn-secondary" type="button">
                            <i class="fa fa-search"></i>
                        </button>
                    </div>   
                </div>
                <div className='mt-2' >
                    <Link to="/register" id="register_tagline">JOIN WILDSTEPPE COMMUNITY TODAY!</Link>
                </div>
            </div>
        </div>
    )
}

export default Home;