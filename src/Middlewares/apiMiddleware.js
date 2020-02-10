import axios from 'axios'
import { apiStart, apiEnd } from './apiDux'
import { history } from './../Store/store'

const apiMiddleware = ({ dispatch }) => (next) => (action) => {
  next(action)

  if (action.type !== 'API') return

  const { url, method, data, accessToken, onSuccess, onFailure, label, headers } = action.payload

  const dataOrParams = ['GET', 'DELETE'].includes(method) ? 'params' : 'data'

  // axios default configs
  // axios.defaults.baseURL = process.env.REACT_APP_BASE_URL || ''
  const baseURL = ''
  axios.defaults.headers.common['Content-Type'] = 'application/json'
  axios.defaults.headers.common['Authorization'] = `Bearer${accessToken}`

  if (label) {
    dispatch(apiStart(label))
  }

  axios
    .request({
      url: `${baseURL}${url}`,
      method,
      headers,
      [dataOrParams]: data
    })
    .then(({ data }) => {
      dispatch(onSuccess(data))
    })
    .catch((error) => {
      dispatch(onFailure(error))

      if (error.response && error.response.status === 403) {
        // dispatch(accessDenied(window.location.pathname))
        history.push('/unauthorised')
      }
    })
    .finally(() => {
      if (label) {
        dispatch(apiEnd(label))
      }
    })
}

export default apiMiddleware
