import React, { ReactNode } from 'react'

import { Box } from 'theme/base'

import Button, { ButtonProps } from '.'

const ButtonWithIcon = ({
  icon,
  direction = 'center',
  type,
  children,
  disabled = false,
  sx,
  ...props
}: ButtonProps & {
  type?: 'button' | 'submit' | 'reset'
  icon: ReactNode
  direction?: 'center' | 'right'
  disabled?: boolean
}) => (
  <Button
    {...props}
    type={type}
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: direction === 'center' ? 'center' : 'space-between',
      flexDirection: direction === 'right' ? 'row-reverse' : 'row',
      ...sx,
    }}
    disabled={disabled}
  >
    <Box mr={direction === 'center' ? 2 : 0} ml={direction === 'right' ? 2 : 0} verticalAlign="middle" lineHeight={0}>
      {icon}
    </Box>
    {children}
  </Button>
)

export default ButtonWithIcon
