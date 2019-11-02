import React from "react";
import { MDBContainer, MDBRow ,MDBCol, MDBCard, MDBCardBody, MDBBtn, MDBModalFooter, MDBInput, MDBNavLink } from "mdbreact";

const RegisterFormView = ({
    register,
    handleInputChange,
    showIncorrectPassword
    }) => {

    return(
        <MDBContainer className="ml-sm-5">
            <MDBRow className="vw-93">
                <p className="h4 text-center py-4 vw-100">Sign up</p>
            </MDBRow>
            <MDBRow className="vw-93">
                <MDBCol className="center mdb-row" w="100">
                    <MDBCard className="card-height">
                        <MDBCardBody className="h-100 card-align p-2">
                            <form className="card-form">
                                <div className="grey-text ">
                                    <div className="grey-text">
                                    {showIncorrectPassword ? (
                                        <p>Password aren't indencital.</p>
                                    ) : null}
                                    </div>
                                    <MDBInput
                                        label="Your name"
                                        icon="envelope"
                                        group
                                        validate
                                        error="wrong"
                                        success="right"
                                        size="lg"
                                        onChange={handleInputChange}
                                        id="registerFormName"
                                    />
                                     <MDBInput
                                        label="Your email"
                                        icon="envelope"
                                        group
                                        type="email"
                                        validate
                                        error="wrong"
                                        success="right"
                                        size="lg"
                                        onChange={handleInputChange}
                                        id = "registerFormEmail"
                                    />
                                    <MDBInput
                                        label="Your password"
                                        icon="lock"
                                        group
                                        type="password"
                                        validate
                                        size="lg"
                                        onChange={handleInputChange}
                                        id = "registerFormPassword"
                                    />
                                    <MDBInput
                                        label="Confirm password"
                                        icon = "exclamation-triangle"
                                        group
                                        type="password"
                                        validate
                                        size="lg"
                                        onChange={handleInputChange}
                                        id = "registerFormConfirmPassword"
                                    />
                                    <div className="flex-center">
                                        <MDBBtn onClick={register}  type="submit" className="login-btn center ">
                                            Register
                                        </MDBBtn>      
                                    </div>
                                </div>
                            </form>
                            <MDBModalFooter>
                                <div className="font-weight-light footer-styling">
                                    <div>
                                        Are you member?
                                        <MDBNavLink to="/login">Sign in</MDBNavLink>
                                    </div>
                                </div>
                            </MDBModalFooter>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default RegisterFormView;