/* eslint-disable no-unused-vars */
import React from 'react'

import './card-list.styles.css';

import { Card } from '../card/card.component';

export const Cardlist = props => {
   return <div className='card-list'>
      {props.monsters.map(monster => (
         <Card key={monster.id} monster={monster} />
      ))}
   </div>
}

export default Cardlist;
