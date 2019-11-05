import React, { Component } from "react";
import EventsListView from "./EventsListView"

class EventsList extends Component {
    state = {
        events: []
    }

    componentDidMount() {
        this.getEvents();
    }

    getEvents = async () => {
        try {
            const response = await fetch(`http://localhost:50492/api/events`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            });

            let data = await response.json();
            this.setState((state, props) => {
                return {
                    events: data
                }
            });
            return data;
        } catch (ex) {
            console.log('Exception:', ex)
        }
    }

    onDeleteEvent = async (id) => {
        
        try {
            const response = await fetch(`http://localhost:50492/api/events/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                }
            });
            this.getEvents();
        } catch (ex) {
            console.log('Exception:', ex)
        }
    }

    render = () => {
        return (
            <EventsListView events={this.state.events} onDelete={this.onDeleteEvent}></EventsListView>
        );
    }
}

export default EventsList;