import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Container>
        <div className="header-icons-container">
          <a href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer">
            <img src="images/facebook-icon.png" /> 
          </a>
          <a href="https://www.google.com/"
            target="_blank"
            rel="noopener noreferrer">
            <img src="images/google-plus-icon.png" /> 
          </a>
          <a href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer">
            <img src="images/twitter-icon.png" /> 
          </a>
        </div>

        <div className="header-hero-main">
          <img src="images/JNJ-landingpage-hero-copy.png" />
        </div>

        <div className="header-hero-scroll">
          <img src="images/JNJ-landingpage-hero-scroll-icon.png" />
        </div>
      </Container>
    </header>
  );
}

export default Header;