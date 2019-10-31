import React from "react";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBModalFooter
} from "mdbreact";
import "./loginForm.css"

const LoginFormView = () => {
    return (
        <MDBContainer className="ml-sm-5">
            <MDBRow className="vw-93">
                <p className="h4 text-center py-4 vw-100">Sign in</p>
            </MDBRow>
        <MDBRow className="vw-93">
          <MDBCol className="center mdb-row" w="100">
            <MDBCard className="card-height">
              <MDBCardBody className="h-100 card-align p-2">
                <form className="card-form">
                  <div className="grey-text">
                    <MDBInput
                      label="Your email"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                      id="loginFormEmail"
                      size="lg"
                    />

                    <MDBInput
                      label="Your password"
                      icon="lock"
                      group
                      type="password"
                      validate
                      id="loginFormPassword"
                      size="lg"
                    />
                  </div>
                  <div className="text-center py-4 mt-3">
                    <MDBBtn type="submit" className="login-btn">
                      Login
                    </MDBBtn>
                  </div>
                </form>
                <MDBModalFooter>
                  <div className="font-weight-light footer-styling">
                    <div>
                      Not a member?
                      <div
                        className="activeLink"
                      >
                        {" "}
                        Sign Up
                      </div>
                    </div>
                    <p className="activeLink">
                      Forgot Password?
                    </p>
                  </div>
                </MDBModalFooter>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
}

export default LoginFormView;