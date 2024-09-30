import React from 'react';
import Experience from "./styles";

export default function CardExperience ({experience}) {
  return (
    <Experience>
      <div>
        <div className='locale'>{experience.locale}</div>
        <div className='function'>{experience.function}</div>
        <div className='description'>{experience.description}</div>
        <div className='period'>{experience.period}</div>
      </div>
    </Experience>
  );
}
