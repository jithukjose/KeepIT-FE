import React from 'react'

import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap'

const SearchModule = ({ children, searchHandler, inputValue, onSearchBtnClick }) => {
  return (
    <div
      style={{
        width: '900px',
        margin: '80px',
        border: '3px solid #73AD21'
      }}
    >
      <InputGroup>
        <InputGroupAddon addonType="prepend"></InputGroupAddon>
        <Input placeholder="Search by ID" onChange={(e) => searchHandler(e)} value={inputValue} />
        <Button onClick={() => onSearchBtnClick()}>Search</Button>
      </InputGroup>
      {children}
    </div>
  )
}

export default SearchModule
