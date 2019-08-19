import React, { Component } from 'react';
import Experience from "./styles";

export default class CardExperience extends Component {
    constructor(props) {
        super(props);

        this.state = {
            experience: props.experience,
        }
    }

    render() {
        const { experience } = this.state;

        return (
            <Experience>
                <span>{experience.locale}</span>   <br />
                <span>{experience.function}</span> <br />
                <span>{experience.period}</span>   <br />
            </Experience>
        );
    }
}
