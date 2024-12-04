import styled from 'styled-components/macro'

import { Type } from 'theme/base'

const LargeHeading = styled(Type.H2)<{ hasUnderline?: boolean }>`
  position: relative;
  &::after {
    display: block;
    content: '';
    width: ${({ hasUnderline }) => (hasUnderline ? '180px' : 0)};
    height: ${({ hasUnderline }) => (hasUnderline ? '4px' : 0)};
    margin-top: ${({ hasUnderline }) => (hasUnderline ? '8px' : 0)};
    background-image: linear-gradient(90deg, #08e6a5 0%, #27daf6 19.27%, #3e8aff 39.58%, rgba(62, 138, 255, 0) 100%);
    opacity: 0.5;
  }
`

export default LargeHeading
