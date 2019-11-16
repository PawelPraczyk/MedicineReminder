import React from "react";
import {
    MDBNavbarBrand,
    MDBNavbar,
    MDBNavItem,
    MDBNavLink,
    MDBIcon,
    MDBNavbarToggler,
    MDBCollapse,
    MDBNavbarNav,
    MDBBtn
} from "mdbreact";

const WelcomePageView = ({ handleClick, d }) =>
{
    return (
        <div>
        <MDBBtn onClick={handleClick}  type="button" className="login-btn center ">
            Register
        </MDBBtn>
         {d ? (
          <h1> esssssssssssssssssssssssssssssssssssssssssssssssssssssss</h1>
        ) : null}
        <MDBBtn onClick={() => console.log(d)}  type="button" className="login-btn center ">
            Register
        </MDBBtn>    
        </div>
        
    );
}

export default WelcomePageView;