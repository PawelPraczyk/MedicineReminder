import React from 'react';
import WelcomePageView from './WelcomePageView';

class WelcomePage extends React.Component
{
    state = {
        d: false,
        a: true
    }

    handleClick = () => {
        this.setState({
            d: true
        })
    }

    render = () => {

        return (
            <WelcomePageView handleClick = {this.handleClick} d = {this.state.d} ></WelcomePageView>
        );
    }
}

export default WelcomePage;