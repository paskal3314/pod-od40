import React from "react";
import { Container } from "react-bootstrap";

const Location = () => {
  return (
    <section id="location">
      <div className="location-bg-pattern d-none d-lg-block" />
      <div className="location-bg-box d-none d-lg-block" />

      <Container>
        <div className="location-wrapper">
          <div className="location-title">
            <h1>Location</h1>
          </div>

          <div className="location-img-container">
            <img
              src="images/JNJ-landingpage-location-image.jpg"
              alt="location"
            />
          </div>

          <div className="loc-cont-container">
            <h3>Ivey Business School</h3>
            <p>
              1255 western Road, London, Ontario, Canada N6G 0N1
              <br />
              <span className="impact-blue">ivey.uwo.ca</span>
            </p>
          </div>

          <div className="loc-cont-container">
            <h3>Have questions?</h3>
            <p>
              Contact:{" "}
              <span className="impact-blue">
                Reya Singh - dsingh28@ITS.JNJ.com
              </span>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Location;
