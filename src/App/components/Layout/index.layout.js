import React from 'react'

import HeaderModule from './Header'
import FooterModule from './Footer'

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div>
        <HeaderModule />
        {children}
        <FooterModule />
      </div>
    </React.Fragment>
  )
}

export default Layout
