import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Introduce = () => {
  return (
    <section id="introduce">
      <Container>
        <div className="introduce-header-container">
          <img src="images/JNJ-landingpage-OD4040.png" alt="OD40" />
        </div>

        <div className="introduce-p-container">
          <p>
            is not your typical Optometry event. This is an invitation to be a
            part of a leading council of elite,
            <br />
            like-minded practice owners who want to learn to be great leaders
            and grow amazing practices.
          </p>

          <p>
            Only 40 attendees will be chosen to receive{" "}
            <span className="impact-blue">THREE</span> impactful business
            training sessions that include
            <br />
            two days of learning and focus groups on areas that make the biggest
            difference in your practice.
          </p>
        </div>
      </Container>

      <Container fluid className="introduce-contents-wrapper">
        <div className="int-bg" />
        <div className="int-bg-pattern-dots" />
        <div className="int-bg-box-1" />
        {/* <div className="int-bg-box-2" /> */}
        <Row>
          <div className="introduce-contents-title col-lg-3 offset-lg-2 col-md-12">
            <h1>
              Top <span className="impact-blue">5 Reasons</span> You Should
              Apply
            </h1>
            <img
              className="d-none d-lg-block"
              src="images/JNJ-landingpage-top5reasons-image.jpg"
              alt="top 5 reasons"
            />
          </div>

          <div className="int-cont-list-wrapper col-lg-5 offset-lg-0 col-md-10 offset-md-1">
            <div className="int-cont-list-container">
              <div className="introduce-contents-list-row">
                <div className="int-cont-list-img-container">
                  <img
                    src="images/JNJ-landingpage-learning-icon.png"
                    alt="lerning icon"
                  />
                </div>
                <div className="int-cont-list-cont">
                  <h3>Learning</h3>
                  <p>
                    Learn business trends and topics from industry experts who
                    live and breathe business.
                  </p>
                </div>
              </div>
              <div className="introduce-contents-list-row">
                <div className="int-cont-list-img-container">
                  <img
                    src="images/JNJ-landingpage-resourcing-icon.png"
                    alt="resourcing icon"
                  />
                </div>
                <div className="int-cont-list-cont">
                  <h3>Resources</h3>
                  <p>
                    Walk away with tools and resources to implement immediately
                    in your practice.
                  </p>
                </div>
              </div>
              <div className="introduce-contents-list-row">
                <div className="int-cont-list-img-container">
                  <img
                    src="images/JNJ-landingpage-networking-icon.png"
                    alt="networking icon"
                  />
                </div>
                <div className="int-cont-list-cont">
                  <h3>Networking</h3>
                  <p>
                    Network with OD`s just like you in similar practice
                    lifecycles and growth opportunities.
                  </p>
                </div>
              </div>
              <div className="introduce-contents-list-row">
                <div className="int-cont-list-img-container">
                  <img
                    src="images/JNJ-landingpage-experience-icon.png"
                    alt="experience icon"
                  />
                </div>
                <div className="int-cont-list-cont">
                  <h3>Experinece</h3>
                  <p>
                    Experience being a part of a special elite group who are
                    progressive and innovative.
                  </p>
                </div>
              </div>
              <div className="introduce-contents-list-row">
                <div className="int-cont-list-img-container">
                  <img
                    src="images/JNJ-landingpage-influence-icon.png"
                    alt="influence icon"
                  />
                </div>
                <div className="int-cont-list-cont">
                  <h3>Influence</h3>
                  <p>
                    Directly Influence the direction of Johnson {"&"} Johnson
                    Vision Care research by being a part of a dedicated focus
                    group.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Row>

        <div className="introduce-scrolldown">
          <a href="#registration" className="btn btn-primary">
            INTERESTED? <span style={{ fontWeight: "400" }}>APPLY NOW</span>
          </a>
        </div>

        <div className="introduce-learn-wrapper">
          <div className="int-bg-box-2 d-none d-lg-block" />
          <div className="introduce-learn-title">
            <h1>
              What Will I <span className="impact-blue">Learn</span>?
            </h1>
            <div className="underline" />
          </div>

          <div className="int-learn-grid">
            <Row>
              <Col>
                <div className="int-learn-item">
                  <img
                    src="images/JNJ-landingpage-people-icon.png"
                    alt="people icon"
                  />
                  <label>People</label>
                </div>
              </Col>
              <Col>
                <div className="int-learn-item">
                  <img
                    src="images/JNJ-landingpage-planning-icon.png"
                    alt="plannning icon"
                  />
                  <label>Planning</label>
                </div>
              </Col>
              <Col>
                <div className="int-learn-item">
                  <img
                    src="images/JNJ-landingpage-process-icon.png"
                    alt="process icon"
                  />
                  <label>Process</label>
                </div>
              </Col>

              <div className="w-100"></div>
              <Col>
                <div className="int-learn-item">
                  <img
                    src="images/JNJ-landingpage-peernetworking-icon.png"
                    alt="peer networking icon"
                  />
                  <label>Peer Networking</label>
                </div>
              </Col>
              <Col>
                <div className="int-learn-item">
                  <img
                    src="images/JNJ-landingpage-prevention-icon.png"
                    alt="prevention icon"
                  />
                  <label>Prevention</label>
                </div>
              </Col>
              <Col>
                <div className="int-learn-item">
                  <img
                    src="images/JNJ-landingpage-practicemarketing-icon.png"
                    alt="practice marketing icon"
                  />
                  <label>Practice Marketing</label>
                </div>
              </Col>

              <div className="w-100"></div>
              <Col>
                <div className="int-learn-item">
                  <img
                    src="images/JNJ-landingpage-performance-icon.png"
                    alt="performance icon"
                  />
                  <label>Performance</label>
                </div>
              </Col>
              <Col>
                <div className="int-learn-item">
                  <img
                    src="images/JNJ-landingpage-partnership-icon.png"
                    alt="partnership icon"
                  />
                  <label>Partnership</label>
                </div>
              </Col>
              <Col>
                <div className="int-learn-item">
                  <img
                    src="images/JNJ-landingpage-personality-icon.png"
                    alt="personality icon"
                  />
                  <label>Personality</label>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Introduce;
