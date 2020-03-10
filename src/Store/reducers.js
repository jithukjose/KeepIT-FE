import { combineReducers } from 'redux'

import ToDoReducer from '../App/Containers/Todos/dux'
import PostsReducer from '../App/Containers/Posts/dux'
import userReducer from '../App/Containers/Users/dux'

const rootreducer = combineReducers({
  ToDoReducer,
  PostsReducer,
  userReducer

})
export default rootreducer
