import { useMutation } from '@tanstack/react-query'
import useApi from './useApi'

const useMutationApi = (method, url, queryConfig = {}, axiosConfig = {}) => {
  const { apiCall } = useApi()

  const mutation = useMutation({
    mutationFn: ({ data, params = {}, customConfig = {}, url: customUrl }) =>
      apiCall({ method, url: customUrl || url, data, params, ...axiosConfig, ...customConfig }),
    ...queryConfig,
  })

  return { ...mutation, isLoading: mutation.isPending }
}

export default useMutationApi
