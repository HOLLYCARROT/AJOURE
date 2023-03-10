import ReactDOM from 'react-dom/client';

import React from 'react';
import First from "./Components/First.jsx";
import Navbar from "./Components/Navbar.jsx";
import Info from "./Components/Info.jsx";

import Advantages from "./Components/Advantages.jsx";
import './main.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Navbar></Navbar>
        <First></First>
        <Advantages></Advantages>
        <Info></Info>
    </React.StrictMode>
);