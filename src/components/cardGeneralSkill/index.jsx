import React from 'react';
import { Skill } from './styles';

export default function cardGeneralSkill({skill}) {
  return (
    <Skill>
      <div>
        <div>{ skill.name } </div>
      </div>
    </Skill>
  );
}
