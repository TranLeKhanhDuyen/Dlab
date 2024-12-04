import styled from 'styled-components/macro'

import Spacer from 'components/common/Spacer'
import { Type } from 'theme/base'

const BodyText = styled(Type.Body)<{ maxWidth?: string }>`
  display: block;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '800px')};
`

export function BodyTextWithTitle({
  heading,
  body,
  color,
  maxWidth = '800px',
}: {
  heading: React.ReactNode
  body: React.ReactNode
  color?: string
  maxWidth?: string
}) {
  return (
    <>
      <Type.H4 color={color}>{heading}</Type.H4>
      <Spacer mb="24px" />
      <BodyText maxWidth={maxWidth}>{body}</BodyText>
    </>
  )
}

export default BodyText
