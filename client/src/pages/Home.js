import SiteLogo from '../Images/wildsteppe_logo.png';
import SiteName from '../Images/Wildsteppe_name.png';


function Home() {
    return (
        <div id="splash_image" className='p-5'>
            <div id='searchBox' className='text-center m-5 p-2'>
                <div>
                    <img id="" src={SiteLogo} alt='site logo'/>    
                </div>
                <div>
                    <img id="" className="" src={SiteName} alt='site name'/>
                </div>
                <div>
                    <input type="text" placeholder="Enter City or Trail Name..."/>
                </div>
            </div>
            Home Page
        </div>
    )
}

export default Home;