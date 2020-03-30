import React from 'react'
import { Nav, NavItem, NavLink, } from 'reactstrap'
import { Link, withRouter } from 'react-router-dom'

import Path from '../../components/Layout/menu'
import classes from './button.module.css'

import { NotifyError, Notify } from '../Toaster/Tosater'
import { ToastContainer } from 'react-toastify';


const HeaderModule = ({ history }) => {
  const renderedMenuItems = Path.map((menu) => (
    <NavItem key={menu.menuName}>
      <Link component={NavLink} to={menu.Url}>
        {menu.menuName}

      </Link>
    </NavItem>
  ))

  const signOutClickHandler = (e) => {
    e.preventDefault()
    localStorage.removeItem('jwt')
    localStorage.removeItem('userId')
    history.push('/login')
  }

  const SignOutButton = <button className={classes.signoutbutton} onClick={signOutClickHandler}  >Signout</button>

  renderedMenuItems.push(SignOutButton)

  return (
    <div className="fixed-top" style={{ backgroundColor: '#F2F2F2' }} >
      <Nav style={{ backgroundColor: '#F2F2F2', float: 'right' }}>{renderedMenuItems}</Nav>
    </div >
  )
}

export default withRouter(HeaderModule)
