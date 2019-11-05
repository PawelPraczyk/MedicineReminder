import React from "react";
import { MDBContainer, MDBInput, MDBCol, MDBRow, MDBCard, MDBCardBody, MDBBtn } from "mdbreact";

const EventsFormView = ({
    addEvent,
    handleInputChange
}) => {

    
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
                                name="date"
                                label="Date"
                                icon="calendar-alt"
                                hint="2019-11-05"
                                group
                                onChange={handleInputChange}
                                type="text"
                                id="eventFormDate"
                                />
                                <MDBInput
                                name="time"
                                label="Time"
                                icon="clock"
                                hint="12:30"
                                group
                                type="text"
                                onChange={handleInputChange}
                                id="eventFormTime"
                                />
                                <MDBInput
                                name="name"
                                label="Name"
                                icon="map"
                                group
                                type="text"
                                onChange={handleInputChange}
                                id="eventFormName"
                                />
                                <MDBInput
                                name="description"
                                label="Description (optional)"
                                icon="sticky-note"
                                group
                                type="textarea"
                                onChange={handleInputChange}
                                id="eventFormDescription"
                                />
                                <div className="flex-center">
                                    <MDBBtn type="submit" onClick={addEvent} className="login-btn center ">
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
