//action types/types
const GET_ALL_POSTS_START = 'POSTS/GET_ALL_POSTS_START'
const GET_ALL_POSTS_SUCCESS = 'POSTS/GET_ALL_POSTS_SUCCESS'
const GET_ALL_POSTS_FAIL = 'POSTS/GET_ALL_POSTS_FAIL'

const GET_ALL_SEARCH_SUCCESS = 'POSTS/GET_ALL_SEARCH_SUCCESS'

export const fetchPostData = () => async (dispatch) => {
  dispatch({ type: GET_ALL_POSTS_START })

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    console.log(response, 'sad')
    const postData = await response.json()
    dispatch(getPostSuccess(postData))

    //22 or dispatch({ type: GET_ALL_POSTS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: GET_ALL_POSTS_FAIL })
  }
}
const getPostSuccess = (postData) => ({
  type: GET_ALL_POSTS_SUCCESS,
  payload: postData
})

export const duxSearchHandler = (e) => ({
  type: GET_ALL_SEARCH_SUCCESS,
  payload: e.target.value
})

//Action creator

//inital state
const initialState = {
  items: []
  // searchString:''
}
//reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POSTS_START:
      return { ...state, error: false, areFetching: true }
    case GET_ALL_POSTS_SUCCESS:
      console.log(action.payload, 'pokemon')
      return { ...state, items: action.payload, areFetching: false }
    case GET_ALL_POSTS_FAIL:
      return { ...state, error: true, areFetching: false }

    case GET_ALL_SEARCH_SUCCESS:
      console.log(action.payload, 'paypay')
      return { ...state, searchString: action.payload, areFetching: false }

    default:
      return state
  }
}
