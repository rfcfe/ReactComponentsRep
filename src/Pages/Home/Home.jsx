import React from "react";
import "./Home.css";
import Button1 from "../Buttons/Button1";
import { Link } from "react-router-dom";

function Home() {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  const buttonStyle = {
    backgroundColor: "gray",
    color: "white",
    padding: "1rem",
    borderRadius: "0.5rem",
    border: "none",
    cursor: "pointer",
  };
  return (
    <div className="home-layout">
      <h1 className="home-title">Welcome to my Repository</h1>
      <div className="home-description">
        This website is where I save my react Components so I can re-use them.
      </div>
      <div className="home-button-get-started">
        <Link to="/options">
          <Button1
            onClick={handleClick}
            style={buttonStyle}
            children={"Get Started"}
          />
        </Link>
      </div>
    </div>
  );
}

export default Home;
