import React, { Component } from 'react';

import { service } from '../../services/service';

import CardExperience from '../../components/cardExperience';

export default class Home extends Component {
    state = {
        experiences: [],
    }

    componentDidMount() {
        this.loadOrders();
    }

    loadOrders = async () => {
        const response = await service.getAll();
        this.setState({ experiences: response });
    }

    render() {
        const { experiences } = this.state;
        return (
            <div>
                {
                    experiences.map(experience => (
                        <CardExperience experience={experience} />
                    ))
                }
            </div>
        );
    }
}
