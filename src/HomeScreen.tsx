import React from "react";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <div>
      <h1>DSA</h1>
      <div>
        <Link to="/bst">bst</Link>
        <Link to="/heap">heap</Link>
        <Link to="/pathfinding">path finding</Link>
      </div>
    </div>
  );
};

export default HomeScreen;
