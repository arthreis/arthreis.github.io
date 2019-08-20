import React, { Component } from 'react';

import { Skill } from './styles';
import Dots from "./components/dots";

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
                <Dots times={skill.value}></Dots>
            </Skill>
        );
    }
}
