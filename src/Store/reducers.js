import { combineReducers } from 'redux'

import ToDoReducer from '../App/Containers/Todos/dux'
import PostsReducer from '../App/Containers/Posts/dux'
import UserReducer from '../App/Containers/Users/dux'
import ProfileReducer from '../App/Containers/Profile/dux'

const rootreducer = combineReducers({
  ToDoReducer,
  PostsReducer,
  UserReducer,
  ProfileReducer

})
export default rootreducer
