import React from "react";
import { MDBContainer, MDBRow ,MDBCol, MDBCard, MDBCardBody, MDBBtn, MDBModalFooter, MDBInput, MDBNavLink } from "mdbreact";

const RegisterFormView = ({
    register,
    handleInputChange,
    showIncorrectPassword,
    showInvalidEmail
    }) => {

    return(
        <MDBContainer className="ml-sm-5">
            
            <MDBRow className="vw-93 mt-5">
                <MDBCol className="center mdb-row" w="100">
                    <MDBCard className="">
                        <MDBCardBody className="h-100 card-align p-2">
                            <MDBRow className="vw-93 grey-text mt-5">
                <p className="h4 text-center py-4 vw-100">Rejestracja</p>
            </MDBRow>
                            <form className="card-form">
                                <div className="grey-text ">
                                    <div className="grey-text">
                                    {showIncorrectPassword ? (
                                        <p>Obydwa hasła różnią się od siebie.</p>
                                        ) : null}
                                        {showInvalidEmail ? (
                                        <p>Adres emial jest nieprawidłowy.</p>
                                    ) : null}
                                    </div>
                                    <MDBInput
                                        label="Nazwa użytkownika"
                                        icon="user-circle"
                                        group
                                        validate
                                        error="wrong"
                                        success="right"
                                        size="lg"
                                        onChange={handleInputChange}
                                        id="registerFormName"
                                    />
                                     <MDBInput
                                        label="Adres email"
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
                                        label="Hasło"
                                        icon="lock"
                                        group
                                        type="password"
                                        validate
                                        size="lg"
                                        onChange={handleInputChange}
                                        id = "registerFormPassword"
                                    />
                                    <MDBInput
                                        label="Potwierdź hasło"
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
                                            Zarejestruj
                                        </MDBBtn>      
                                    </div>
                                </div>
                            </form>
                            <MDBModalFooter>
                                <div className="font-weight-light footer-styling">
                                    <div>
                                        Masz już konto?
                                        <MDBNavLink to="/login">Zaloguj się</MDBNavLink>
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