// export const API_FETCH_DATA_SUCCESS = 'API_FETCH_DATA_SUCCESS'
// export const DATAS_ARE_FETCHING = 'DATAS_ARE_FETCHING'
// export const DATAS_HAS_ERRORED = 'DATAS_HAS_ERRORED'

// //action

// function fetchDatas() {
//   return (dispatch) => {
//     dispatch(DATAS_ARE_FETCHING())
//     return fetchPosts().then(([response, json]) => {
//       if (response.status === 200) {
//         dispatch(API_FETCH_DATA_SUCCESS(json))
//       } else {
//         dispatch(DATAS_HAS_ERRORED())
//       }
//     })
//   }
// }

// function fetchPosts() {
//   const URL = 'https://jsonplaceholder.typicode.com/profile'
//   return fetch(URL, { method: 'GET' }).then((response) => Promise.all([response, response.json()]))
// }

// //inital state
// const initialState = {
//   items: []
// }
// //reducer
// export default (state = initialState, action) => {
//   switch (action.type) {
//     case DATAS_ARE_FETCHING:
//       return { ...state, error: false, areFetching: true }
//     case API_FETCH_DATA_SUCCESS:
//       return { ...state, items: action.payload, areFetching: false }
//     case DATAS_HAS_ERRORED:
//       return { ...state, error: true, areFetching: false }
//     default:
//       return state
//   }
// }
