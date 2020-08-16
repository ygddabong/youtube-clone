import React from 'react';
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Router path="/search/:searchTerm">
            <div className="app__page">
              <Sidebar />
            </div>
          </Router>
          <Router path="/">

            <div className="app__page">
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Router>
        </Switch>
      </Router> 
    </div>
  );
}

export default App;
