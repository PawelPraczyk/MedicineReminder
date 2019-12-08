import React from "react";
import { MDBContainer, MDBInput, MDBCol, MDBRow, MDBCard, MDBCardBody, MDBBtn, MDBFormInline } from "mdbreact";

const EventsEditView = ({
    handleInputChange,
    editEvent
}) => {

    return (
        <MDBContainer>
            
            <MDBRow className="mt-5 mb-5">
                <MDBCol>
                    <MDBCard>
                        <MDBCardBody>
                            <MDBRow>
                                <p className="h4 text-center py-4 vw-100 grey-text">Edytuj zdarzenie</p>
                            </MDBRow>
                        <form className="mx-3 grey-text">
                                <MDBInput
                                name="name"
                                label="Naza leku"
                                icon="map"
                                group
                                type="text"
                                onChange={handleInputChange}
                                id="eventFormName"
                                />
                                <MDBInput
                                name = "time"
                                label = "Czas"
                                icon = "clock"
                                hint = "12:30"
                                group
                                type = "text"
                                onChange = {
                                    handleInputChange}
                                id = "eventFormTime" 
                                />
                                 <MDBInput
                                name="date"
                                label="Data"
                                icon="calendar-alt"
                                hint="2019-11-05"
                                group
                                onChange={handleInputChange}
                                type="text"
                                id="eventFormDate"
                                />       
                                
                                <MDBInput
                                name="description"
                                label="Opis (opcjonalnie)"
                                icon="sticky-note"
                                group
                                type="textarea"
                                onChange={handleInputChange}
                                id="eventFormDescription"
                                />
                                <div className="flex-center">
                                    <MDBBtn type="submit" onClick={editEvent} className="login-btn center ">
                                        Edytuj
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

export default EventsEditView;