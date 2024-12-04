// eslint-disable-next-line no-restricted-imports
import { t } from '@lingui/macro'
import { AxiosError } from 'axios'

export const getErrorMessage = (error: AxiosError): string => {
  if (!error?.response?.data) return t`An error occurs. Please try again`
  return (error.response.data as any).message
}
