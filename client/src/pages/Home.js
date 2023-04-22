import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import TrailList from '../components/TrailList';
import SiteLogo from '../Images/wildsteppe_logo.png';
import SiteName from '../Images/Wildsteppe_name.png';
import { Link } from "react-router-dom";
import SearchResultsList from '../components/SearchResultsList';

function Home() {
    
    const [results, setResults] = useState([]);

    return (
        <>
        <div id="splash_image" className='p-5'>
            <div id='splashTitleBox' className='text-center m-5 p-3'>
                <div>
                    <img id="" src={SiteLogo} alt='site logo'/>    
                </div>
                <div className='mt-2'>
                    <img id="" className="" src={SiteName} alt='site name'/>
                </div>
                <div id='tag_line' className='mb-5' >Take A Step Into The Wild</div>
                <SearchBar setResults={setResults}/>
                <div className=''><SearchResultsList results={results}/></div>
                <div className='mt-2' >
                    <Link to="/register" id="register_tagline">JOIN WILDSTEPPE COMMUNITY TODAY!</Link> 
                </div>
            </div>
        </div>
        <TrailList />
        </>
    )
}

export default Home;