import { notification } from 'antd'

export const errorNotification = (
    errorObject?: any,
    message?: string
): void => {
    let errorMessage = ''
    if (errorObject) {
        if (errorObject.status >= 500) {
            errorMessage = errorObject.mesage || errorObject.data?.message
            notification.error({
                message: errorMessage,
            })
            return
        }

        if (errorObject.status === 404) {
            notification.error({
                message: 'Resource not found',
            })
            return
        }
    }

    if (typeof errorObject === 'string') {
        errorMessage = errorObject
    }

    notification.error({
        message: message || errorMessage,
    })
}
