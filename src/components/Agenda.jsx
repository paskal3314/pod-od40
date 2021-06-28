import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Agenda = () => {
  return (
    <section id="agenda">
      <div className="agenda-bg-pattern" />
      <div className="agenda-bg-box d-none d-lg-block" />
      
      <Container>
        <div className="agenda-wrapper">


          <div className="agenda-title">
            <h1>Agenda</h1>
          </div>

          <Row>
            <Col xs={12} lg={4}>
              <div className="agenda-item bg-red">
                <h3>January 11 {'&'} 12, 2018</h3>
                <div className="agenda-img-profile">
                  <img src="images/scot-morris-photo.jpg" />
                </div>
                <h3 className="agenda-name">Dr. Scot Morris</h3>

                <div className="agenda-icons-wrapper">
                  <div className="agenda-icon-container">
                    <img className="agenda-icon" src="images/JNJ-landingpage-planning-icon-white.png"/>
                  </div>
                  <div className="agenda-icon-container">
                    <img className="agenda-icon" src="images/JNJ-landingpage-process-icon-white.png"/>
                  </div>
                  <div className="agenda-icon-container">
                    <img className="agenda-icon" src="images/JNJ-landingpage-practicemarketing-icon-white.png"/>
                  </div>
                </div>
                <p>
                  Dr. Scot Morris, OD, well known speaker, author, editor and educator will take attendees through a day of learning on everything from designing your vision {'&'} business niche to patient flow, financial basics and operational efficiency. Scot is one of the most knowledgeable practice management speakers in Optometry today.
                </p>
              </div>
            </Col>

            <Col xs={12} lg={4}>
              <div className="agenda-item bg-blue">
                <h3>May 8 {'&'} 9, 2018</h3>
                <div className="agenda-img-profile">
                  <img src="images/kevin-wilhelm-photo.png" />
                </div>
                <h3 className="agenda-name">Kevin Wilhelm</h3>
                <div className="agenda-icons-wrapper">
                  <div className="agenda-icon-container">
                    <img className="agenda-icon" src="images/JNJ-landingpage-planning-icon-white.png"/>
                  </div>
                  <div className="agenda-icon-container">
                    <img className="agenda-icon" src="images/JNJ-landingpage-process-icon-white.png"/>
                  </div>
                  <div className="agenda-icon-container">
                    <img className="agenda-icon" src="images/JNJ-landingpage-practicemarketing-icon-white.png"/>
                  </div>
                </div>
                <p>
                  Meeting marketing guru, Kevin Wilhelm. Current president of Marketing4ECPs, Kevin is a serial entrepreneur, brand ambassador, educator and marketing facilitator. Attendees will learn how to dominate in a digital based world as well as learn the basics of traditional marketing, in office design, merchandising and the value of partnering with everyone from supplier partners to services.
                </p>
              </div>
            </Col>

            <Col xs={12} lg={4}>
              <div className="agenda-item bg-red">
                <h3>Nov 15 {'&'} 16, 2017</h3>
                <div className="agenda-img-profile">
                  <img src="images/trudi-charest-photo.jpg" />
                </div>
                <h3 className="agenda-name">Trudi Charest</h3>
                <div className="agenda-icons-wrapper">
                  <div className="agenda-icon-container">
                    <img className="agenda-icon" src="images/JNJ-landingpage-planning-icon-white.png"/>
                  </div>
                  <div className="agenda-icon-container">
                    <img className="agenda-icon" src="images/JNJ-landingpage-process-icon-white.png"/>
                  </div>
                  <div className="agenda-icon-container">
                    <img className="agenda-icon" src="images/JNJ-landingpage-practicemarketing-icon-white.png"/>
                  </div>
                </div>
                <p>
                  Trudi Charest has been a leading educator and speaker in the eyecare industry for decades. She brings an extensive background of experience from retail to wholesale to clinical. She also has an HR background working as a corporate trainer/recruiter for a large eyecare group. This day will be all about people!<br/>
                  <a 
                    href=""
                    target="_blank"
                    rel="noopener noreferrer">
                    READ MORE</a>
                </p>
              </div>
            </Col>

          </Row>
        </div>
      </Container>
    </section>
  );
}

export default Agenda;