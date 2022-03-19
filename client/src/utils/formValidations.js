import { translate } from './helper'

export const required = (value, message = 'requiredField') => !!value || translate(`$vuetify.${message}`)
export const validPhoneNumber = value => !value || RegExp(/^(05|5|9725)([0-9]{8})$/).test(value) || translate('$vuetify.invalidNumber')
export const minLength = (value, minLength = 11) => value?.length >= minLength || translate('$vuetify.minLengthError', minLength)
