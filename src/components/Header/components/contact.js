import React from 'react';

const Contact = ({contact}) => {
  return (
    <div style={style}>
      <div>{contact.email}</div>
      <div>{contact.phone}</div>
      <a href={'https://www.' + contact.linkedin}>{contact.linkedin}</a>
      <div>{contact.location}</div>
    </div>
  );
};

export default Contact;

const style = {
  justifyContent: 'center',
  fontWeight: '500',
  fontSize: '15px'
};
