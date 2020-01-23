import React from 'react'

import HeaderModule from './Header'
import FooterModule from './Footer'

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <HeaderModule />
      {children}
      <FooterModule />
    </React.Fragment>
  )
}

export default Layout
