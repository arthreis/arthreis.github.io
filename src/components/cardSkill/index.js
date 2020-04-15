import React from 'react';
import { Dots } from "../../components";
import { Skill } from './styles';

export default function cardSkill({skill}) {
  return (
    <Skill>
      <div>
        <div>{ skill.name } </div>
        <Dots times={skill.value} />
      </div>
    </Skill>
  );
}
