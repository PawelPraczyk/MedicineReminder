import React, { Component } from "react";
import EventsFormView from "./EventsFormView"

class EventsForm extends Component {
    state = {
        eventFormDate: "",
        eventFormTime: "",
        eventFormName: "",
        eventFormDescription: "",
        dailyOptionsShow: false,
        weeklyOptionsShow: false,
        custormOptionsShow: false,
        onePerDay: false,
        couplePerDay: false
    };

    handleDaily = () => {
        this.setState({
            dailyOptionsShow: true,
            weeklyOptionsShow: false,
            custormOptionsShow: false
        })
    }

    handleWeekly = () => {
        this.setState({
            dailyOptionsShow: false,
            weeklyOptionsShow: true,
            custormOptionsShow: false
        });
    }

    handleCustorm = () => {
        this.setState({
            dailyOptionsShow: false,
            weeklyOptionsShow: false,
            custormOptionsShow: true
        });
    }

    handleOnePerDay = () => {
        this.setState({
            onePerDay: true,
            couplePerDay: false
        });
    }

    handleCouplePerDay = () => {
        this.setState({
            onePerDay: false,
            couplePerDay: true
        });
    }

    handleInputChange = e => {
        const state = {};
        state[`${e.target.id}`] = e.target.value;
        this.setState(state);
    };

    addEvent = async e => {
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
    };

    render = () => {
        return (
            <EventsFormView handleDaily={this.handleDaily} dailyOptionsShow={this.state.dailyOptionsShow} handleWeekly={this.handleWeekly} weeklyOptionsShow={this.state.weeklyOptionsShow} handleCustorm={this.handleCustorm} custormOptionsShow={this.state.custormOptionsShow} {...this.viewProps} handleCouplePerDay={this.handleCouplePerDay} couplePerDay={this.state.couplePerDay} handleOnePerDay={this.handleOnePerDay} onePerDay={this.state.onePerDay}></EventsFormView>
        );
    }
}

export default EventsForm;