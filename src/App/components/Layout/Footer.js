import React from 'react'
import { Nav } from 'reactstrap'

const FooterModule = (props) => {
  return (
    <div className="fixed-bottom">
      <Nav style={{ backgroundColor: 'lightblue' }}>
        <h2>This is footer</h2>
      </Nav>
    </div>
  )
}

export default FooterModule
