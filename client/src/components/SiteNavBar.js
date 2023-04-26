import { useGlobalState } from '../context/GlobalState';
import SiteLogo from '../Images/wildsteppe_logo.png';
import SiteName from '../Images/Wildsteppe_name.png';
import { Link, useNavigate } from "react-router-dom";
import AuthService from '../services/auth.service';

function SiteNavBar() {
    
    const [ state, dispatch ] = useGlobalState();
    let navigate = useNavigate();
    
    const handleLogout = (e) => {
        e.preventDefault();
        AuthService.logout();
        console.log("user clicked log out")
        navigate('/');
        dispatch({
            currentUserToken: null,
            currentUser: null
        })
    }

    return (
        <div id="navbar" className='navigation border border-bottom'>
            <nav className='navbar navbar-expand'>
                    <div className='container'>
                        <div className='navbar-brand float-start align-middle'>
                            <img id="site_logo" src={SiteLogo} alt='site logo'/>    
                            <img id="site_name" className="mt-2" to='/' src={SiteName} alt='site name'/>
                        </div>
                    <ul className="navbar-nav ml-auto">
                        <Link to="/" id='navBarItems' className='nav-item me-5 mt-3'>Home</Link>
                        <Link to="/about" id='navBarItems' className='nav-item me-5 mt-3'>About Us</Link>
                        {!state.currentUser &&
                            <Link to="/login" id="loginButton" className='nav-item btn me-5'>Sign In</Link>
                        }
                        {state.currentUser && 
                            <>
                                {/* <Link to="/profile" id='navBarItems' className='nav-item me-5 mt-3'>Profile</Link> */}
                                <Link onClick={handleLogout} id="loginButton" className="nav-item btn me-5">Sign Out</Link>
                            </>
                        } 
                    </ul>
                </div>                
            </nav>
        </div>
    )
}

export default SiteNavBar;