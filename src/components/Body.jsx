import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Global/Header.jsx"
import HomePage from "./HomePage/Body.jsx";
import Login from "./Login/Body.jsx";
import Register from "./Register/Body.jsx";
import RoomListing from "./RoomListing/Body.jsx";
import RoomDetails from "./RoomDetails/Body.jsx";

const Body = () => {
    return (
        <Router>
        <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/roomlisting" element={<RoomListing />} />
        <Route path="/roomdetails" element={<RoomDetails />} />
            </Routes>
        </Router>
    );
};

export default Body;