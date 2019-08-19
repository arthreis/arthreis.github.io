import React, { Component } from 'react';

import { Skill, Dot } from './styles';

export default class cardSkill extends Component {

    constructor(props){
        super(props);

        this.state = {
            skill: props.skill,
        }

    }

    render() {
        const { skill } = this.state;
        return (
            <Skill>
                <span>{ skill.name } </span> <br />
                <span>{ skill.value } </span> <br />
            </Skill>
        );
    }
}
