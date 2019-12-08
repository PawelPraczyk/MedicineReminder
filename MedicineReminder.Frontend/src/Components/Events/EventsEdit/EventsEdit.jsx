import React, { Component } from "react";
import EventsEditView from "./EventsEditView"

class EventsEdit extends Component {
    
    state = {
        eventFormDate: "",
        eventFormTime: "",
        eventFormName: "",
        eventFormDescription: "",
    };

    handleInputChange = e => {
        const state = {};
        state[`${e.target.id}`] = e.target.value;
        this.setState(state);
    };

    editEvent = async e => {
        e.preventDefault();


        const event = {
            Name: this.state.eventFormName,
            Message: this.state.eventFormDescription,
            RemaindDate: `${this.state.eventFormDate} ${this.state.eventFormTime}`
        }

        try {
            const response = await fetch(`http://localhost:50492/api/events`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(event)
            });

            const data = await response.text();
            this.props.history.push("/events");

            return data;
        } catch (ex) {
            console.log('Exception:', ex)
        }
    }

    viewProps = {
        handleInputChange: this.handleInputChange,
        addEvent: this.addEvent,
    }

    render = () => {
        return (
            <EventsEditView  {...this.viewProps}></EventsEditView>
        );
    }
}

export default EventsEdit;