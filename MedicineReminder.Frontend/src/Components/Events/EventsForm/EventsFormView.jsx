import React from "react";
import { MDBContainer, MDBInput, MDBCol, MDBRow, MDBCard, MDBCardBody, MDBBtn, MDBFormInline } from "mdbreact";
import './EventForm.css';


const EventsFormView = ({
    addEvent,
    handleInputChange,
    handleWeekly,
    handleCustorm,
    handleDaily,
    dailyOptionsShow,
    weeklyOptionsShow,
    custormOptionsShow,
    handleCouplePerDay,
    handleOnePerDay,
    onePerDay,
    couplePerDay
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
                                name="name"
                                label="Naza leku"
                                icon="map"
                                group
                                type="text"
                                onChange={handleInputChange}
                                id="eventFormName"
                                />
                                <MDBFormInline className="center-line">
                                    <MDBBtn onClick={handleDaily} type="button" >
                                        Codziennie
                                    </MDBBtn>
                                    <MDBBtn type="button" onClick={handleWeekly}>
                                        Jednorazowo
                                    </MDBBtn>
                                    {/* <MDBBtn type="button" onClick={handleCustorm}>
                                        Własne
                                    </MDBBtn> */}
                                </MDBFormInline>
                                {dailyOptionsShow ? (
                                <div>
                                    <MDBFormInline className="center-line">
                                        <MDBBtn onClick={handleOnePerDay} type="button" >
                                            Raz dziennie
                                        </MDBBtn>
                                        <MDBBtn type="button" onClick={handleCouplePerDay}>
                                            Kilka razy 
                                        </MDBBtn>
                                    </MDBFormInline>
                                    {onePerDay ? (
                                        <MDBInput
                                        name = "time"
                                        label = "Czas"
                                        icon = "clock"
                                        hint = "12:30"
                                        group
                                        type = "text"
                                        onChange = {
                                            handleInputChange
                                        }
                                        id = "eventFormTime" 
                                        />
                                    ) : null}
                                    {couplePerDay ? (
                                        <MDBInput
                                        name = "time"
                                        label = "Co ile godzin?"
                                        icon = "clock"
                                        hint = "3"
                                        group
                                        type = "text"
                                        onChange = {
                                            handleInputChange
                                        }
                                        id = "eventFormTime" 
                                        />
                                    ) : null}
                                </div>
                                ) : null}
                                {weeklyOptionsShow ? (
                                    <div>
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
                                        name = "time"
                                        label = "Czas"
                                        icon = "clock"
                                        hint = "12:30"
                                        group
                                        type = "text"
                                        onChange = {
                                            handleInputChange
                                        }
                                        id = "eventFormTime" 
                                        />
                                        </div>
                                ) : null}
                                {/* {custormOptionsShow ? (
                                <h1>custorm</h1>
                                 ) : null} */}
                                
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
