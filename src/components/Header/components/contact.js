import React from 'react';

const Contact = ({contact}) => {
  return (
    <div style={style}>
      <div>
        <div>{contact.email}</div>
        <div>{contact.phone}</div>
        <div>
          <a href={'https://www.' + contact.linkedin}>{contact.linkedin}</a>
        </div>
        <div>{contact.location}</div>
      </div>
    </div>
  );
};

export default Contact;

const style = {
  fontWeight: '500',
  fontSize: '15px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  marginRight: '5%',
};
