import React from "react";
import { MDBContainer, MDBInput, MDBCol, MDBRow, MDBCard, MDBCardBody, MDBBtn } from "mdbreact";

const EventsFormView = () => {

    
    return (
        <MDBContainer>
            <MDBRow>
                <p className="h4 text-center py-4 vw-100">Add Event Reminder</p>
            </MDBRow>
            <MDBRow>
                <MDBCol>
                    <MDBCard>
                        <MDBCardBody>
                            <form className="mx-3 grey-text">
                                <MDBInput
                                name="time"
                                label="Time"
                                icon="clock"
                                hint="12:30"
                                group
                                type="text"
                                />
                                <MDBInput
                                name="name"
                                label="Name"
                                icon="map"
                                group
                                type="text"
                                />
                                <MDBInput
                                name="description"
                                label="Description (optional)"
                                icon="sticky-note"
                                group
                                type="textarea"
                                />
                                <div className="flex-center">
                                    <MDBBtn  color="deep-orange" type="submit" className="login-btn center ">
                                        Add
                                    </MDBBtn>      
                                </div>
                            </form>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        
            
        </MDBContainer>
    );
}

export default EventsFormView;
