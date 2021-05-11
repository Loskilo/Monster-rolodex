/* eslint-disable no-unused-vars */
import React from 'react'

import './card.component.css'

export const Card = props => (
    <div className='card-container'>
        <img  alt="monster" src={`https://robohash.org/${props.monster.id}?set=set9&size=180x180`}/>
        <h1>{props.monster.name}</h1>
    </div>
)