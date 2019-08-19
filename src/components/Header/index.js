import React, { Component } from 'react';

import { Container } from './styles';
import Contact from "./components/contact";
import MainInfo from "./components/mainInfo";

import { service } from "./../../services/service";

export default class Header extends Component {
    state = {
        personInfo: {},
        contact: {}
    }
    componentDidMount(){
        this.buscaInfo();
    }

    buscaInfo = async () => {
        const data = await service.getPersonInformations();
        console.log(data);
        this.setState({personInfo: data.personInfo});
        this.setState({contact: data.contact});
    }

    render() {
        const { personInfo, contact } = this.state;

        return (
            <Container>
                <MainInfo info={personInfo} />
                <Contact contact={contact} />
            </Container>
        );
    }
}
