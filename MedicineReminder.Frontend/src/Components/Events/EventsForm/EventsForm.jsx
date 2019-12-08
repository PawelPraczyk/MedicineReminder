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
        couplePerDay: false,
        value: 0,
        emptyName: false
    };

    validate = () => {
        if (!this.state.eventFormName) {
            this.setState({
                emptyName: true
            });
            return false;
        } else {
            this.setState({
                emptyName: false
            })
        }

        return true;
    }

    decrease = (e) => {
        this.setState({
            value: this.state.value - 1
        });
        e.preventDefault();
    }

    increase = (e) => {
        this.setState({
            value: this.state.value + 1
        });
        e.preventDefault();
    }

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
        const isValid = this.validate();

        if (isValid)
        {
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
        
    }

    viewProps = {
        handleInputChange: this.handleInputChange,
        addEvent: this.addEvent,
        increase: this.increase,
        decrease: this.decrease,
        handleDaily: this.handleDaily,
        handleWeekly: this.handleWeekly,
        handleCustorm: this.handleCustorm,
        handleCouplePerDay: this.handleCouplePerDay,
        handleOnePerDay: this.handleOnePerDay 
    };

    render = () => {
        return (
            <EventsFormView emptyName={this.state.emptyName}  dailyOptionsShow={this.state.dailyOptionsShow} weeklyOptionsShow={this.state.weeklyOptionsShow} custormOptionsShow={this.state.custormOptionsShow} {...this.viewProps} couplePerDay={this.state.couplePerDay} onePerDay={this.state.onePerDay} countValue = {this.state.value}></EventsFormView>
        );
    }
}

export default EventsForm;