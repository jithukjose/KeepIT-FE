import { combineReducers } from 'redux'

import ToDoReducer from '../App/Containers/Todos/dux'

const rootreducer = combineReducers({
  ToDoReducer
})
export default rootreducer
