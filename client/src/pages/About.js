import { Link } from "react-router-dom";

function About() {
    return (
        <div id="about" className="container-fluid p-5">
            <div id="about_page" className="container text-center p-4 ps-5 pe-5">
                <div id="about_header" className="mb-5">Welcome to Wildsteppe!</div>
                <p>At Wildsteppe, we are passionate about outdoor adventures and connecting people with nature. Our app is designed to help outdoor enthusiasts, hikers,
                    and nature lovers explore the wild and scenic trails of the world. Whether you are a seasoned hiker or new to the trail, Wildsteppe is your go-to
                    guide for discovering and experiencing breathtaking natural wonders.</p>
                <p>Our mission is to provide a user-friendly platform that empowers individuals to embark on unforgettable adventures in the great outdoors. With Wildsteppe,
                    you can easily search, discover, and plan your next hiking or camping trip with confidence. Our app offers an extensive database of trails, ranging from short
                    scenic hikes to challenging backcountry treks, with detailed trail maps, ratings, reviews, and photos to help you make informed decisions.</p>
                <p>We believe in fostering a vibrant community of outdoor enthusiasts who share a passion for nature and the thrill of exploration. Our app allows you to connect 
                    with fellow hikers, share your experiences, and contribute valuable insights and tips to help others make the most of their adventures. Whether you want to find 
                    a hiking buddy, learn from seasoned adventurers, or share your own stories, Wildsteppe provides a platform to connect, inspire, and learn from like-minded nature 
                    enthusiasts.</p>
                <p>At Wildsteppe, we are committed to environmental conservation and responsible outdoor stewardship. We promote Leave No Trace principles and advocate for sustainable 
                    and responsible outdoor practices. We believe in protecting our natural resources and preserving the pristine beauty of our wilderness for generations to come. 
                    Through our app, we aim to raise awareness about environmental issues, promote conservation efforts, and inspire our community to be responsible outdoor advocates.</p>
                <p>Join us on this thrilling journey of exploration and discovery. Download Wildsteppe app now and unlock a world of awe-inspiring trails, breathtaking vistas, and unforgettable 
                    adventures. Whether you are a casual day hiker, an avid backpacker, or someone who simply loves spending time in nature, Wildsteppe is your trusted companion for embarking 
                    on your next wild adventure. Happy trails!</p>
                <div className='mt-2' >
                    <Link to="/register" id="register_tagline">JOIN WILDSTEPPE COMMUNITY TODAY!</Link> 
                </div>
            </div>
        </div>
    )
}

export default About;