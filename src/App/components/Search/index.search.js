import React from 'react'
// import './App.css';

import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap'

const SearchModule = ({ children }) => {
  return (
    <div
      style={{
        width: '900px',
        margin: 'auto',
        border: '3px solid #73AD21'
      }}
    >
      <InputGroup>
        <InputGroupAddon addonType="prepend"></InputGroupAddon>
        <Input placeholder="Search" />
        <InputGroupText>Search</InputGroupText>
      </InputGroup>
      {children}
    </div>
  )
}

export default SearchModule
