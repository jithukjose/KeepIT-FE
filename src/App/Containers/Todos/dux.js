export const API_FETCH_DATA_SUCCESS = 'API_FETCH_DATA_SUCCESS'
export const DATAS_ARE_FETCHING = 'DATAS_ARE_FETCHING'
export const DATAS_HAS_ERRORED = 'DATAS_HAS_ERRORED'

export const fetchDatas = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch({ type: DATAS_ARE_FETCHING })
    dispatch({
      type: 'API',
      payload: {
        url: 'https://jsonplaceholder.typicode.com/todos',
        method: 'GET',
        data: null,
        onSuccess: (response) => {
          resolve(response)
          return {
            type: API_FETCH_DATA_SUCCESS,
            payload: response
          }
        },
        onFailure: (error) => {
          reject()
          return {
            type: 'DATAS_HAS_ERRORED',
            payload: error
          }
        }
      }
    })
  })
}

const initialState = {
  items: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case DATAS_ARE_FETCHING:
      return { ...state, error: false, areFetching: true }
    case API_FETCH_DATA_SUCCESS:
      return { ...state, items: action.payload, areFetching: false }
    case DATAS_HAS_ERRORED:
      return { ...state, error: true, areFetching: false }
    default:
      return state
  }
}
