export const handleErrorNotification = (err, notification) => {
  console.error('Error:', err)

  if (err?.response?.data) {
    const errorData = err.response.data

    if (typeof errorData === 'string') {
      notification.error(errorData)
    } else if (Array.isArray(errorData)) {
      errorData.forEach((errMessage) => {
        if (typeof errMessage === 'object') {
          Object.keys(errMessage).forEach((key) => {
            const message = errMessage[key]
            if (typeof message === 'string') {
              notification.error(`${key}: ${message}`)
            } else if (Array.isArray(message)) {
              message.forEach((msg) => notification.error(`${key}: ${msg}`))
            }
          })
        } else {
          notification.error(errMessage)
        }
      })
    } else if (typeof errorData === 'object') {
      Object.keys(errorData).forEach((key) => {
        const message = errorData[key]
        if (typeof message === 'string') {
          notification.error(`${key}: ${message}`)
        } else if (Array.isArray(message)) {
          message.forEach((msg) => notification.error(`${key}: ${msg}`))
        }
      })
    } else {
      notification.error('An unknown error occurred.')
    }
  } else {
    notification.error('An unknown error occurred.')
  }
}

export const handleCustomErrorNotification = (error, notification) => {
  if (typeof error === 'string') {
    notification.error(error)
  } else if (error?.message) {
    notification.error(error.message)
  } else {
    notification.error('An unknown error occurred.')
  }
}

export const handleError = (error, notification) => {
  if (error && typeof error === 'object') {
    Object.keys(error).forEach((key) => {
      const message = error[key]
      if (typeof message === 'string') {
        notification.error(`${key}: ${message}`)
      } else if (Array.isArray(message)) {
        message.forEach((msg) => notification.error(`${key}: ${msg}`))
      }
    })
  } else {
    notification.error('An unknown error occurred.')
  }
}
