import { ReactNode } from 'react'

import { Box } from 'theme/base'
import { BoxProps } from 'theme/types'

import Button, { ButtonProps } from '.'

const IconButton = ({
  icon,
  type = 'button',
  width = '40px',
  height = '40px',
  borderRadius = '50%',
  sx,
  ...props
}: ButtonProps & { type?: 'button' | 'submit' | 'reset'; icon: ReactNode } & any) => (
  <Button
    width={width}
    height={height}
    type={type}
    variant="outline"
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius,
      p: 0,
      'svg, span': {
        verticalAlign: 'middle',
      },
      ...sx,
    }}
    {...props}
  >
    {icon}
  </Button>
)

export default IconButton

export const DumbIconButton = ({
  icon,
  disabled = false,
  width = '40px',
  height = '40px',
  sx,
  ...props
}: BoxProps & { icon: ReactNode; disabled?: boolean } & any) => (
  <Box
    width={width}
    height={height}
    {...props}
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      border: 'normal',
      borderColor: 'neutral6',
      bg: disabled ? 'neutral7' : 'transparent',
      opacity: disabled ? 0.5 : 1,
      color: 'neutral3',
      p: 0,
      '&:hover, &:focus': {
        cursor: disabled ? 'not-allowed' : 'pointer',
        bg: disabled ? 'neutral7' : 'neutral6',
      },
      'svg, span': {
        verticalAlign: 'middle',
      },
      ...sx,
    }}
  >
    {icon}
  </Box>
)
