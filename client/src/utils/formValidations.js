import { translate } from './helper'

export const required = (value, message = 'requiredField') => !!value || translate(`$vuetify.${message}`)
export const minLength = (value, minLength = 11) => value?.length >= minLength || translate('$vuetify.minLengthError', minLength)
