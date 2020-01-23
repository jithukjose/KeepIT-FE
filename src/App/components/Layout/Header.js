import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'
import { Link } from 'react-router-dom'

import Path from '../../components/Layout/menu'

const HeaderModule = () => {
  const renderedMenuItems = Path.map((menu) => (
    <NavItem>
      <Link component={NavLink} to={menu.Url}>
        {menu.menuName}
      </Link>
    </NavItem>
  ))

  return (
    <div>
      <Nav style={{ backgroundColor: 'lightblue' }}>{renderedMenuItems}</Nav>
    </div>
  )
}

export default HeaderModule
