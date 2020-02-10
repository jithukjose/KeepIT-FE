const API_START = 'API_START'
const API_END = 'API_END'

export const apiStart = (method) => {
  const loadingParam = ['POST', 'PUT'].includes(method) ? 'laddaLoading' : 'loading'
  return {
    type: API_START,
    payload: loadingParam
  }
}

export const apiEnd = (method) => {
  const loadingParam = ['POST', 'PUT'].includes(method) ? 'laddaLoading' : 'loading'
  return {
    type: API_END,
    payload: loadingParam
  }
}

const initialState = {
  loading: 0,
  laddaLoading: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case API_START:
      return {
        ...state,
        [action.payload]: state[action.payload] + 1
      }
    case API_END:
      return {
        ...state,
        [action.payload]: state[action.payload] - 1
      }

    default:
      return state
  }
}
