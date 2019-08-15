import React, { Component } from 'react';

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
            <div key={experience.id}>
                <span>{experience.name}</span><br/>
                <br/>
            </div>
        );
    }
}
