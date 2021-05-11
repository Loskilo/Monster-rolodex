/* eslint-disable no-unused-vars */
import React from 'react'

import './card-list.styles.css';

import { Card } from '../card/card.component';

export const Cardlist = props => {
   return <div className='card-list'>
      {props.monsters.map(monster => (
         <h1 key={monster.id}>{monster.name}</h1>
      ))}
   </div>
}

export default Cardlist;
