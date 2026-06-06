import useApi from './useApi'
import { ADMINISTRATOR_API_ENDPOINTS } from '../api/endpoints'

export const useFetchOrg = () => {
  const { apiCall } = useApi()

  const fetchOrganizations = async (email) => {
    if (!email) {
      throw new Error('Email is required')
    }

    const data = await apiCall({
      method: 'get',
      url: `${ADMINISTRATOR_API_ENDPOINTS.ORGANISATION}filter-by-email/${email}/`,
      params: {},
    })

    if (!data?.results) {
      throw new Error('Failed to fetch organisations !.')
    }

    return {
      organizations: data.results,
      warning: data.results.length === 0 ? 'No organizations found for this email !.' : null,
    }
  }

  return { fetchOrganizations }
}
