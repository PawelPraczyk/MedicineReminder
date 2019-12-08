import React from "react";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBModalFooter,
    MDBNavLink
} from "mdbreact";
import "./loginForm.css"

const LoginFormView = ({
  changeFormToRegister
}) => {
    return (
        <MDBContainer className="ml-sm-5">
            
        <MDBRow className="vw-93 mt-5">
          <MDBCol className="center mdb-row" w="100">
            <MDBCard className="card-height">
              <MDBCardBody className="h-100 card-align p-2">
                <MDBRow className="vw-93 grey-text">
                <p className="h4 text-center py-4 vw-100">Logowanie</p>
            </MDBRow>
                <form className="card-form">
                  <div className="grey-text">
                    <MDBInput
                      label="Adres email"
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
                      label="Hasło"
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
                      Zaloguj
                    </MDBBtn>
                  </div>
                </form>
                <MDBModalFooter>
                  <div className="font-weight-light footer-styling">
                      Nie masz jeszcze konta?
                      <MDBNavLink to="/register">Zarejestruj się</MDBNavLink>
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