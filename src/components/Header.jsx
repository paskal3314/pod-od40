import React from "react";
import { Container } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Container>
        <div className="header-icons-container">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="images/facebook-icon.png" alt="facebook icon" />
          </a>
          <a
            href="https://www.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="images/google-plus-icon.png" alt="google plus icon" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="images/twitter-icon.png" alt="twitter icon" />
          </a>
        </div>

        <div className="header-hero-main">
          <img src="images/JNJ-landingpage-hero-copy.png" alt="hero content" />
        </div>

        <div className="header-hero-scroll">
          <img
            src="images/JNJ-landingpage-hero-scroll-icon.png"
            alt="scroll down"
          />
        </div>
      </Container>
    </header>
  );
};

export default Header;
