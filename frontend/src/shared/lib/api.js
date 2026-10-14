import axios from 'axios'

export const api = axios.create({
  baseURL: '/api/v1',
  withCredentials: true,
  withXSRFToken: true,
  headers: {
    Accept: 'application/json',
  },
})

export function getCsrfCookie() {
  return axios.get('/sanctum/csrf-cookie', { withCredentials: true })
}

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const status = error.response?.status
    const request = error.config

    if (status === 401 && window.location.pathname !== '/login') {
      window.location.href = '/login'
    }

    if (status === 419 && !request._retry) {
      request._retry = true
      await getCsrfCookie()
      return api(request)
    }

    if (status === 422) {
      error.validationErrors = error.response.data.errors ?? {}
    }

    return Promise.reject(error)
  },
)