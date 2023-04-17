import './App.css';
import SiteNavBar from './components/SiteNavBar';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About';
import TrailPage from './pages/TrailPage'
import Login from './pages/Login'
import Register from './pages/Register';

function App() {
    return (
        <>
            <SiteNavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/trailPage" element={<TrailPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path='/register' element={<Register />} />
                </Routes>
            
        </>
    );
}

export default App;