import axios from '../api/cutomeAxios'

const useApi = () => {
  const apiCall = async ({ method, url, data = null, params = {}, config = {} }) => {
    const response = await axios({
      method,
      url,
      data,
      params,
      ...config,
    })
    return response.data
  }

  return { apiCall }
}

export default useApi
