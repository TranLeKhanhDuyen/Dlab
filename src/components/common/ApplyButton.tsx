import styled from 'styled-components/macro'

import Button from 'theme/Button'

const ApplyButton = styled(Button).attrs({
  size: 'xl',
})`
  height: max-content;
  width: max-content;
  background-color: ${({ theme }) => theme.colors.primary1};
  border-radius: 2px;
  color: ${({ theme }) => theme.colors.neutral8};
  border: none;
`

export default ApplyButton
