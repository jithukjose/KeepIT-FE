import React from 'react'

import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap'

const SearchModule = ({
  children,
  searchHandler,
  inputValue,
  keyPressHandler,
  onScreenEnterKey
}) => {
  return (
    <div
      style={{
        width: '900px',
        margin: '80px',
        border: '3px solid	#00289e'
      }}
    >
      <InputGroup>
        <InputGroupAddon addonType="prepend"></InputGroupAddon>
        <Input
          placeholder="Search by ID"
          onKeyDown={(e) => keyPressHandler(e)}
          onChange={(e) => searchHandler(e)}
          value={inputValue}
        />
        <Button onClick={(e) => onScreenEnterKey(e)}>Search</Button>
      </InputGroup>
      {children}
    </div>
  )
}

export default SearchModule
