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
} from "mdbreact";

const MenuView = () =>
{

    return (
            <MDBNavbar color="default-color" dark expand="md">
                <MDBNavbarBrand>
                <strong className="white-text">Medicine Reminder</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler />
                <MDBCollapse id="navbarCollapse3"  navbar>
                <MDBNavbarNav left>
                    <MDBNavItem active>
                    <MDBNavLink to="/">Home</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                    <MDBNavLink to="/events">Events</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                    <MDBNavLink to="#!">Medicines</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                    </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                    <MDBNavItem>
                        <MDBNavLink className="waves-effect waves-light" to="/login">
                            <MDBIcon icon="power-off" />
                        </MDBNavLink>
                    </MDBNavItem>
                </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
    );
}

export default MenuView;