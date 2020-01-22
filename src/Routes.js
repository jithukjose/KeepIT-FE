import React from 'react'
import { Switch, Route } from 'react-router-dom'

import PostContainer from '../src/App/Containers/Posts/Index.post'
import TodosContainer from '../src/App/Containers/Todos/index.todos'
import UsersContainer from '../src/App/Containers/Users/index.users'

//   <Link to='/'>Home</Link>
// </li>
// <li>
//   <Link
//     to={{
//       pathname: '/new-post'
//     }}

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={PostContainer} />
      <Route path="/Posts" exact component={PostContainer} />
      <Route path="/Todos" exact component={TodosContainer} />
      <Route path="/Users" exact component={UsersContainer} />
    </Switch>
  )
}
export default Routes
