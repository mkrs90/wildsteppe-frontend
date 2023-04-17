import SiteLogo from '../Images/wildsteppe_logo.png';
import SiteName from '../Images/Wildsteppe_name.png';
import { Link } from "react-router-dom";

function SiteNavBar() {
    
    return (
        <div id="navbar" className='navigation border border-bottom'>
            <nav className='navbar navbar-expand'>
                    <div className='container'>
                        <div className='navbar-brand float-start align-middle'>
                            <img id="site_logo" src={SiteLogo} alt='site logo'/>    
                            <img id="site_name" className="mt-2" to='/' src={SiteName} alt='site name'/>
                        </div>
                    <ul className="navbar-nav ml-auto">
                        <Link to="/" className='nav-item me-5 mt-2'>Home</Link>
                        <Link to="/about" className='nav-item me-5 mt-2'>About Us</Link>
                        <Link to="/" className='nav-item btn btn-outline-success me-5'>Sign Up</Link>
                        <Link to="/login" className='nav-item btn btn-outline-success me-5'>Log In</Link>
                    </ul>
                </div>                
            </nav>
        </div>
    )
}

export default SiteNavBar;