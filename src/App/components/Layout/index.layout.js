import React from 'react'

import HeaderModule from './Header'
import FooterModule from './Footer'
import { isLogin } from '../../../Helper/LocalStorage'

const Layout = ({ children }) => {
  return (
    <React.Fragment>

      {/* {window.location.pathname !== '/login' && '/signup' ? <NavMenu /> : null} */}

      <div>
        <HeaderModule />
        {children}
        <FooterModule />
      </div>
    </React.Fragment>
  )
}

export default Layout
