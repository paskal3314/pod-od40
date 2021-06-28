import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Registration = () => {
  return (
    <section id="registration">
      <Container>
        <form className="registration-wrapper">
          <div className="registration-title">
            <h1>Registration</h1>
          </div>

          <div className="reg-form-container">
            <p>
              please fill out the information below. Please note you must be available to attend all three sessions.
            </p>

            <Row>
              <Col xs={12} lg={6}>
                <div className="reg-input-container">
                  <input type="text" className="form-control" id="inputFirstName" placeholder="First Name" />
                </div>
              </Col>
              <Col xs={12} lg={6}>
                <div className="reg-input-container">
                  <input type="text" className="form-control" id="inputLastName" placeholder="Last Name" />
                </div>
              </Col>
              <div className="w-100" />
              
              <Col xs={12} lg={6}>                
                <div className="reg-input-container">
                  <input type="email" className="form-control" id="inputEmail" placeholder="E-Mail" />                  
                </div>
              </Col>
              <Col xs={12} lg={6}>
                <div className="reg-input-container">
                  <input type="text" className="form-control" id="inputPName" placeholder="Practice Name" />                  
                </div>
              </Col>
              <div className="w-100" />

              <Col xs={12} lg={4}>
                <div className="reg-input-container">
                  <input type="text" className="form-control" id="inputAddress" placeholder="Address" />                  
                </div>
              </Col>
              <Col xs={12} lg={4}>
                <div className="reg-input-container">
                  <input type="text" className="form-control" id="inputCity" placeholder="City" />                  
                </div>
              </Col>
              <Col xs={12} lg={4}>
                <div className="reg-input-container">
                  <input type="text" className="form-control" id="inputZipCode" placeholder="Zip Code" />                  
                </div>
              </Col>
              <div className="w-100" />

              <Col xs={12} lg={6}>
                <div className="reg-input-container">                  
                  <input type="text" className="form-control" id="inputProvince" placeholder="Province" />
                </div>
              </Col>
              <Col xs={12} lg={6}>
                <div className="reg-input-container">                  
                  <input type="text" className="form-control" id="inputCountry" placeholder="Country" />
                </div>
              </Col>
              <div className="w-100" />

              <Col xs={12} lg={4}>
                <div className="reg-input-rad-container">
                  <label className="reg-input-label">
                    Please choose one:
                  </label>
                  
                  <div className="input-rad-row">
                    <input type="radio" className="form-check-input" name="inputCustomerType" id="inputCustomerType1" value="option1" checked />
                    <label className="form-check-label" for="inputCustomerType1">
                      Independent Practice Owner - OD
                    </label>
                  </div>

                  <div className="input-rad-row">
                    <input type="radio" className="form-check-input" name="inputCustomerType" id="inputCustomerType2" value="option2" />
                    <label className="form-check-label" for="inputCustomerType2">
                      Corporate Practice Owner - OD
                    </label>
                  </div>

                  <div className="input-rad-row">
                    <input type="radio" className="form-check-input" name="inputCustomerType" id="inputCustomerType3" value="option3" />
                    <label className="form-check-label" for="inputCustomerType3">
                      New Grad - OD
                    </label>
                  </div>
                  
                  <div className="input-rad-row">
                    <input type="radio" className="form-check-input" name="inputCustomerType" id="inputCustomerType4" value="option4" />
                    <label className="form-check-label" for="inputCustomerType4">
                      Associate Optometrist - OD
                    </label>
                  </div>
                </div>
              </Col>

              <Col xs={12} lg={8}>
                <div className="reg-input-textarea-container">
                  <label className="reg-input-label" for="inputComment">
                    Please list three opportunities you see for the future of Optometry:
                  </label>
                  <textarea className="form-control" id="inputComment" rows="3" placeholder="Comment" />
                </div>
              </Col>
            </Row>

            <button type="submit" className="btn btn-primary mb-2">
              SUBMIT
            </button>

            <div className="reg-thx-msg-container">
              <h3>
                Thank you for applying for OD 40/40.
              </h3>
              <p>
                You will be contacted by Johnson {'&'} Johnson Vision Care marketing department regarding the application process and final 40 chosen attendees.
              </p>
            </div>              

          </div>
        </form>
      </Container>
    </section>
  );
}

export default Registration;