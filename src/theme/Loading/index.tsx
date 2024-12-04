import styled from 'styled-components/macro'

import { Box } from 'theme/base'

const Loading = styled(Box)`
  border: 4px solid ${({ theme }) => theme.colors.neutral1}16;
  border-top: 4px solid ${({ theme }) => theme.colors.primary1};
  border-radius: 50%;
  width: 32px;
  height: 32px;
  animation: spin 1s linear infinite;
  margin: 10px auto;
`
export default Loading
