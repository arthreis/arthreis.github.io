import React, { Component } from 'react';

import { service } from '../../services/service';

import CardExperience from '../../components/cardExperience';
import CardSkill from "../../components/cardSkill";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { Container, Cards, Content } from "./styles";

export default class Home extends Component {

    state = {
        experiences: [],
        skills: [],
    }

    componentDidMount() {
        this.loadExperiences();
    }

    loadExperiences = () => {
        const experiences = service.getExperiences();
        const skills = service.getSkills();
        this.setState({ experiences: experiences });
        this.setState({ skills: skills });
    }

    render() {
        const { experiences } = this.state;
        const { skills } = this.state;
        return (
            <Container>
                <Header />

                <Content>
                    <Cards color={'default'}>
                        <h1>Skills</h1>
                        {
                            skills.map(skill => (
                                <CardSkill key={skill.id} skill={skill} />
                            ))
                        }
                    </Cards>

                    <Cards color={'default'}>
                        <h1>Experiences</h1>
                        {
                            experiences.map(experience => (
                                <CardExperience key={experience.id} experience={experience} />
                            ))
                        }
                    </Cards>
                </Content>

                <Footer />

            </Container>
        );
    }
}
