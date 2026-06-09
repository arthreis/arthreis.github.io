import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 10px;
  max-width: 550px;

  @media (max-width: 800px) {
    justify-content: flex-start;
  }
`;

const ContactChip = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  background-color: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  padding: 4px 10px;
  border-radius: 4px;
  font-family: 'Fira Code', monospace;
  font-size: 1.2rem;
  color: #9ba3af;
  transition: all 0.2s ease;

  a {
    color: #9ba3af;
    text-decoration: none;
    transition: color 0.2s ease;
    &:hover {
      color: #00f2fe;
    }
  }

  .material-icons {
    font-size: 1.4rem;
    color: #7f00ff;
    text-shadow: 0 0 5px rgba(127, 0, 255, 0.3);
  }

  &:hover {
    border-color: rgba(0, 242, 254, 0.2);
    background-color: rgba(0, 242, 254, 0.02);
    color: #f8fafc;
    .material-icons {
      color: #00f2fe;
      text-shadow: 0 0 5px rgba(0, 242, 254, 0.5);
    }
  }
`;

const Contact = ({ contact }) => {
  return (
    <ContactContainer>
      {contact.email && (
        <ContactChip>
          <span className="material-icons">email</span>
          <span>{contact.email}</span>
        </ContactChip>
      )}
      {contact.phone && (
        <ContactChip>
          <span className="material-icons">phone</span>
          <span>{contact.phone}</span>
        </ContactChip>
      )}
      {contact.linkedin && (
        <ContactChip>
          <span className="material-icons">link</span>
          <a href={'https://www.' + contact.linkedin} target="_blank" rel="noopener noreferrer">
            {contact.linkedin.replace('linkedin.com/in/', 'in/')}
          </a>
        </ContactChip>
      )}
      {contact.location && (
        <ContactChip>
          <span className="material-icons">place</span>
          <span>{contact.location}</span>
        </ContactChip>
      )}
    </ContactContainer>
  );
};

export default Contact;
