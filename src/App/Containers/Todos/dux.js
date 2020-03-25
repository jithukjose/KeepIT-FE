export const GET_ALL_TODOS_SUCCESS = 'TODOS/API_FETCH_DATA_SUCCESS'
export const GET_ALL_TODOS_START = 'TODOS/DATAS_ARE_FETCHING'
export const GET_ALL_TODOS_FAIL = 'TODOS/DATAS_HAS_ERRORED'

// export const fetchDatas = () => (dispatch) => {
//   return new Promise((resolve, reject) => {
//     dispatch({ type: DATAS_ARE_FETCHING })
//     dispatch({
//       type: 'API',
//       payload: {
//         url: 'https://jsonplaceholder.typicode.com/todos',
//         method: 'GET',
//         data: null,
//         onSuccess: (response) => {
//           resolve(response)
//           return {
//             type: API_FETCH_DATA_SUCCESS,
//             payload: response
//           }
//         },
//         onFailure: (error) => {
//           reject()
//           return {
//             type: 'DATAS_HAS_ERRORED',
//             payload: error
//           }
//         }
//       }
//     })
//   })
// }
export const fetchTodosData = () => async (dispatch) => {
  dispatch({ type: GET_ALL_TODOS_START })

  try {

    const TOKEN_KEY = 'jwt';
    const token = localStorage.getItem(TOKEN_KEY)

    const response = await fetch('http://localhost:5000/api/todos', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      },
      // body: JSON.stringify(personalData)
    })
    const todoData = await response.json()
    dispatch(getPostSuccess(todoData))

    //22 or dispatch({ type: GET_ALL_POSTS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: GET_ALL_TODOS_FAIL })
  }
}
const getPostSuccess = (todoData) => ({
  type: GET_ALL_TODOS_SUCCESS,
  payload: todoData

})

const initialState = {
  todoData: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_TODOS_START:
      return { ...state, error: false, areFetching: true }
    case GET_ALL_TODOS_SUCCESS:
      return { ...state, todoData: action.payload, areFetching: false }
    case GET_ALL_TODOS_FAIL:
      return { ...state, error: true, areFetching: false }
    default:
      return state
  }
}
