/* eslint-disable no-unused-vars */
import React from 'react'

import './card.component.css'

export const Card = props => (
    <div className='card-container'>
        <h1>{props.monster.name}</h1>
    </div>
)