import React from 'react';
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
    return (
        <div className="app">
            <Header/>
            <div className="app_body">
                <Sidebar/> {/* React Router -> Chat screen */} </div>
        </div>
    );
}

export default App;
