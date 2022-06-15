import { translate } from './helper'

export const required = (value, message = 'requiredField') => !!value || translate(`$vuetify.${message}`)
export const minLength = (value, minLength = 11) => value?.length >= minLength || translate('$vuetify.minLengthError', minLength)
export const biggerThan = (value, min = -1) => value > min || translate('$vuetify.minLengthError', minLength)
export const smallerThan = (value, max = 1001) => value < max || translate('$vuetify.requiredField', minLength)
