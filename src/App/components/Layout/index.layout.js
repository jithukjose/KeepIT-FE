import React from 'react'

import HeaderModule from './Header'


const Layout = ({ children }) => {
  return (
    <React.Fragment>

      {/* {window.location.pathname !== '/login' && '/signup' ? <NavMenu /> : null} */}

      <div>
        <HeaderModule />
        {children}
        {/* <FooterModule /> */}
      </div>
    </React.Fragment>
  )
}

export default Layout
