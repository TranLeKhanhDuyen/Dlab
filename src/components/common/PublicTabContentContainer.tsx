import styled from 'styled-components/macro'

import { Box } from 'theme/base'

const Wrapper = styled(Box)<{ image?: string }>`
  width: 100%;
  flex: 1;
  position: relative;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-position: right bottom;
  margin-bottom: 24px;
`

export default Wrapper
