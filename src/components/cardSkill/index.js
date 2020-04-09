import React from 'react';
import Dots from "./components/dots";
import { Skill } from './styles';

export default function cardSkill({skill}) {
  return (
    <Skill>
      <span>{ skill.name } </span> <br />
      <Dots times={skill.value}></Dots>
    </Skill>
  );
}
