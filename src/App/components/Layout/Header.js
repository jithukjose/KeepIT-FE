import React, { useState } from 'react'
import { Nav, NavItem, NavLink, } from 'reactstrap'
import { Link, withRouter } from 'react-router-dom'

import Path from '../../components/Layout/menu'
import classes from './button.module.css'
import SignoutModalModule from '../Modal/SignOutModalModule'

import { NotifyError, Notify } from '../Toaster/Tosater'
import { ToastContainer } from 'react-toastify';


const HeaderModule = ({ history }) => {
  const [isShowing, setIsShowing] = useState(false)

  const renderedMenuItems = Path.map((menu) => (
    <NavItem key={menu.menuName}>
      <Link component={NavLink} to={menu.Url}>
        {menu.menuName}

      </Link>
    </NavItem>
  ))

  const signOutClickHandler = (e) => {
    setIsShowing(!isShowing);
    e.preventDefault()
  }

  const onSignoutConfirmClick = () => {
    localStorage.removeItem('jwt')
    localStorage.removeItem('userId')
    history.push('/login')
    setIsShowing(!isShowing);

  }


  const SignOutButton = <button className={classes.signoutbutton} onClick={signOutClickHandler}  >Signout</button>

  renderedMenuItems.push(SignOutButton)

  return (
    <>
      <div className="fixed-top" style={{ backgroundColor: '#F2F2F2' }} >
        <Nav style={{ backgroundColor: '#F2F2F2', float: 'right' }}>{renderedMenuItems}</Nav>
      </div >
      {isShowing ? <SignoutModalModule
        isShowing={isShowing}
        onSignoutConfirmClick={onSignoutConfirmClick}
        onModalClick={signOutClickHandler}
      /> : ''}
    </>
  )
}

export default withRouter(HeaderModule)
