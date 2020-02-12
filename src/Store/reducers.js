import { combineReducers } from 'redux'

import ToDoReducer from '../App/Containers/Todos/dux'
import PostsReducer from '../App/Containers/Posts/dux'

const rootreducer = combineReducers({
  ToDoReducer,
  PostsReducer
})
export default rootreducer
