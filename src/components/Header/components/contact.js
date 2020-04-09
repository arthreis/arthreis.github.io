import React from 'react';

const Contact = ({contact}) => {
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

const style = {
  padding: '50px',
  fontWeight: '500',
  fontSize: '15px'
};
