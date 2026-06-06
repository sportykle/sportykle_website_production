import useMutationApi from './useMutationApi'
import { ADMINISTRATOR_API_ENDPOINTS } from '../api/endpoints'
import { handleErrorNotification } from '../utils/handleError'
import { useNavigate } from 'react-router-dom'

export const useLogin = () => {
  const navigate = useNavigate()

  const { mutate: login, isPending: isLoading, error, isSuccess } = useMutationApi(
    'post',
    ADMINISTRATOR_API_ENDPOINTS.LOGIN,
    {},
    { timeout: 10000 },
  )

  const handleLogin = (credentials, notification) => {
    notification.showLoading('Logging in...')
    localStorage.clear()
    login(
      { data: credentials },
      {
        onSuccess: (response) => {
          const { key, user } = response
          if (!key || !user) {
            notification.hideLoading()
            notification.error('Login failed: Invalid response from server.')
            return
          }
          notification.hideLoading()
          notification.success('Login success!')
          localStorage.setItem('token', key)
          setTimeout(() => {
            navigate('/organization/register')
          }, 2000)
        },
        onError: (err) => {
          notification.hideLoading()
          handleErrorNotification(err, notification)
        },
      },
    )
  }

  return { handleLogin, isLoading, error, isSuccess }
}
