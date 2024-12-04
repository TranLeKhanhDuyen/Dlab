import { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from 'react'
import { NumberFormatValues } from 'react-number-format'

import { BoxProps } from 'theme/types'

export type InputWrapperProps = BoxProps & { disabled?: boolean; block?: boolean }
export type InputProps = {
  block?: boolean
  hasError?: boolean
  variant?: string
  affix?: ReactNode
  suffix?: ReactNode
} & InputHTMLAttributes<HTMLInputElement>

export interface InputSearchProps extends InputProps {
  onClear: () => void
}

export type TextareaProps = {
  block?: boolean
  hasError?: boolean
  variant?: string
} & TextareaHTMLAttributes<HTMLTextAreaElement>

export type NumberInputProps = {
  control: any
  rules?: any
  isInteger?: boolean
  isAllowed?: (values: NumberFormatValues) => boolean
}
