import "./App.css";
import SiteNavBar from "./components/SiteNavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import TrailPage from "./pages/TrailPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import ParkPage from "./pages/ParkPage";

function App() {
  return (
    <>
      <SiteNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/trail/:id" element={<TrailPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/park/:parkCode" element={<ParkPage />} />
      </Routes>
    </>
  );
}

export default App;
