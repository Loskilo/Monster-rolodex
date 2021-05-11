/* eslint-disable no-unused-vars */
import React from 'react'
import './search-box.styles.css'

const SearchBox = ( { placeholder,handleChange }) => (
    <div>
        <input
        className='search'
         type="search"
         placeholder= {placeholder} 
         onChange={handleChange}
        />
    </div>
)