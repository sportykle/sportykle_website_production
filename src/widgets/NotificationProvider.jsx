import React, { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { Check, X, AlertCircle, Star } from 'lucide-react'
import { toast, Toaster as ReactHotToastToaster } from 'react-hot-toast'

const NotificationContext = createContext({})

const notificationStyles = 'bg-red-50 border-red-200 text-red-800'

export const NotificationProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)

  const showMessage = ({ type, content, duration = 3000 }) => {
    toast.custom(
      (t) => (
        <div
          className={`${
            t.visible ? 'animate-enter' : 'animate-leave'
          } flex items-center space-x-2 px-4 py-2 rounded shadow border ${
            type === 'success'
              ? 'bg-green-50 border-green-200 text-green-800'
              : notificationStyles
          } ${type === 'warning' ? 'bg-yellow-50 border-yellow-200 text-yellow-800' : ''} ${
            type === 'info' ? 'bg-blue-50 border-blue-200 text-blue-800' : ''
          } ${type === 'celebrate' ? 'bg-purple-50 border-purple-200 text-purple-800' : ''}`}
        >
          {type === 'success' && <Check className="h-4 w-4 text-green-500" />}
          {type === 'error' && <X className="h-4 w-4 text-red-500" />}
          {type === 'warning' && <AlertCircle className="h-4 w-4 text-yellow-500" />}
          {type === 'celebrate' && <Star className="h-4 w-4 text-purple-500" />}
          <span>{content}</span>
        </div>
      ),
      { duration },
    )
  }

  const showLoading = (content = 'Loading...') => {
    setLoading(true)
    toast.loading(content, { duration: Infinity })
  }

  const hideLoading = () => {
    setLoading(false)
    toast.dismiss()
  }

  const success = (content) => showMessage({ type: 'success', content })
  const error = (content) => showMessage({ type: 'error', content })
  const warning = (content) => showMessage({ type: 'warning', content })
  const info = (content) => showMessage({ type: 'info', content })
  const celebrate = (content) => showMessage({ type: 'celebrate', content })

  const contextValue = React.useMemo(
    () => ({
      success,
      error,
      warning,
      info,
      celebrate,
      showLoading,
      hideLoading,
      loading,
    }),
    [loading],
  )

  return (
    <NotificationContext.Provider value={contextValue}>
      {children}
      <ReactHotToastToaster
        position="top-right"
        toastOptions={{
          style: {
            position: 'fixed',
            zIndex: 9999,
          },
        }}
      />
    </NotificationContext.Provider>
  )
}

NotificationProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const useNotification = () => {
  const context = useContext(NotificationContext)
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider')
  }
  return context
}
