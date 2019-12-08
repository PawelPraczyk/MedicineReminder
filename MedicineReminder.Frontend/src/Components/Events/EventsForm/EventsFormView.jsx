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
    couplePerDay,
    increase,
    decrease,
    countValue,
    emptyName
}) => {

    
    return (
        <MDBContainer>
            
            <MDBRow className="mt-5 mb-5">
                <MDBCol>
                    <MDBCard>
                        <MDBCardBody>
                            <MDBRow>
                                <p className="h4 text-center py-4 vw-100 grey-text">Dodaj zdarzenie</p>
                            </MDBRow>
                            <form className="mx-3 grey-text">
                                 <div className="grey-text">
                                    {emptyName ? (
                                        <p>Nazwa leku jest wymagana.</p>
                                        ) : null}
                                    </div>
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
                                    <MDBBtn type="button" onClick={handleWeekly}>
                                        Jednorazowo
                                    </MDBBtn>
                                    <MDBBtn onClick={handleDaily} type="button" >
                                        Codziennie
                                    </MDBBtn>
                                    <MDBBtn type="button" onClick={handleCustorm}>
                                        Niestandarodowo
                                    </MDBBtn>
                                </MDBFormInline>
                                {dailyOptionsShow ? (
                                    <div>
                                        <p className="h4 text-center py-4 grey-text">Ile razy dziennie?</p>
                                        <div className="center-line">
                                            <div className="def-number-input number-input">
                                                <button onClick={decrease} className="minus"></button>
                                                <input className="quantity" name="quantity" value={countValue} onChange={()=> console.log('change')}
                                                type="number" />
                                                <button onClick={increase} className="plus"></button>
                                            </div>
                                        </div>
                                        <p className="h4 text-center py-4 grey-text">Godziny przypomnień</p>
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
                                {custormOptionsShow ? (
                                    <div>
                                         <div>
                                            <p className="h4 py-4 text-center grey-text">W jakie dni?</p>
                                            <MDBFormInline className="center-line">
                                                <MDBInput
                                                label='Pn'
                                                filled
                                                type='checkbox'
                                                id='checkbox1'
                                                containerClass='mr-5'
                                                />
                                                <MDBInput
                                                label='Wt'
                                                filled
                                                type='checkbox'
                                                id='checkbox2'
                                                containerClass='mr-5'
                                                />
                                                <MDBInput
                                                label='Śr'
                                                filled
                                                type='checkbox'
                                                id='checkbox3'
                                                containerClass='mr-5'
                                                />
                                                <MDBInput
                                                label='Cz'
                                                filled
                                                type='checkbox'
                                                id='checkbox4'
                                                containerClass='mr-5'
                                                />
                                                <MDBInput
                                                label='Pt'
                                                filled
                                                type='checkbox'
                                                id='checkbox5'
                                                containerClass='mr-5'
                                                />
                                                <MDBInput
                                                label='So'
                                                filled
                                                type='checkbox'
                                                id='checkbox6'
                                                containerClass='mr-5'
                                                />
                                                <MDBInput
                                                label='Nd'
                                                filled
                                                type='checkbox'
                                                id='checkbox7'
                                                containerClass='mr-5'
                                                />
                                            </MDBFormInline>
                                        </div>
                                        <p className="h4 py-4 text-center grey-text">Ile razy dziennie?</p>
                                        <div className="center-line">
                                            <div className="def-number-input number-input">
                                                <button onClick={decrease} className="minus"></button>
                                                <input className="quantity" name="quantity" value={countValue} onChange={()=> console.log('change')}
                                                type="number" />
                                                <button onClick={increase} className="plus"></button>
                                            </div>
                                        </div>
                                <MDBInput
                                        name = "time"
                                        label = "Czas przypomnienia nr 1"
                                        icon = "clock"
                                        hint = "12:30"
                                        group
                                        type = "text"
                                        onChange = {
                                            handleInputChange
                                        }
                                        id = "eventFormTime" 
                                        />
                                         <MDBInput
                                        name = "time"
                                        label = "Czas przypomnienia nr 2"
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
                                        Dodaj
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
