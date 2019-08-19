import React from 'react';

const style = {
    background: 'yellow',
    color: 'blue',
};

const Contact = (props) => {
    const { contact } = props;
    console.log(contact);

    return (
        <div style={style}>
            <span>{contact.email}</span><br/>
            <span>{contact.phone}</span><br/>
            <span>{contact.linkedin}</span><br/>
            <span>{contact.location}</span><br/>
        </div>
    );
};

export default Contact;
