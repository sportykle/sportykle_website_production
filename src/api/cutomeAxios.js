import axios from 'axios'

const subdomain = undefined
const BASE_DOMAIN = 'dev.sportykle.in'
const API_PATH = '/api'

const BASE_URL = subdomain
  ? `https://${subdomain}.${BASE_DOMAIN}${API_PATH}`
  : `https://${BASE_DOMAIN}${API_PATH}`

const customAxios = axios.create({
  baseURL: BASE_URL,
})

customAxios.interceptors.request.use(
  (config) => {
    const TOKEN = localStorage.getItem('token')
    if (TOKEN) {
      config.headers.Authorization = `Token ${TOKEN}`
    }
    return config
  },
  (error) => Promise.reject(error),
)

export default customAxios
