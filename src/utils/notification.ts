/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
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
    } else {
        errorMessage = errorObject.message
    }

    notification.error({
        message: message || errorMessage,
    })
}
