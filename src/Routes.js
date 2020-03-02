import React from 'react'
import { Switch, Route } from 'react-router-dom'

import PostContainer from '../src/App/Containers/Posts/Index.post'
import TodosContainer from '../src/App/Containers/Todos/index.todos'
import UsersContainer from '../src/App/Containers/Users/index.users'
import ProfileContainer from '../src/App/Containers/Profile/index.profile'
import LoginContainer from './App/Containers/Authentication/Login/index.login'
import SignUpContainer from './App/Containers/Authentication/SignUp/index.signup'

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={PostContainer} />
      <Route path="/posts" exact component={PostContainer} />
      <Route path="/todos" exact component={TodosContainer} />
      <Route path="/users" exact component={UsersContainer} />
      <Route path="/profile" exact component={ProfileContainer} />
      <Route path="/login" exact component={LoginContainer} />
      <Route path="/signup" exact component={SignUpContainer} />
    </Switch>
  )
}
export default Routes
