import React from 'react';
import Experience from "./styles";

export default function CardExperience ({experience}) {
  return (
    <Experience>
      <div>{experience.locale}</div>
      <div>{experience.function}</div>
      <div>{experience.period}</div>
    </Experience>
  );
}
