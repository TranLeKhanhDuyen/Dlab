import { CSSProperties } from '@styled-system/css'
import styled from 'styled-components/macro'

import { Box } from 'theme/base'

const StyledBox = styled(Box)<{ hasUnderline?: boolean }>`
  ${(props) => `
    text-decoration: ${props.hasUnderline ? 'underline' : 'none'}
  `}
`

function TextLink({
  underline = false,
  color = 'neutral2',
  href,
  children,
  style,
  target,
  ...rest
}: {
  underline?: boolean
  color?: string
  href: string
  children: React.ReactNode
  style?: CSSProperties
  target?: string
  rest?: any
}) {
  return (
    <StyledBox
      fontSize={2}
      as="a"
      href={href}
      target={target}
      color={color}
      hasUnderline={underline}
      style={style}
      {...rest}
    >
      {children}
    </StyledBox>
  )
}

export default TextLink
