import { useRef } from 'react'
import styled from 'styled-components/macro'

import { Box, Type } from 'theme/base'

const Wrapper = styled(Box)`
  padding: 12px 16px;
  border-radius: 2px;
  background: transparent;
  width: 100%;
  position: relative;
  background-color: ${({ theme }) => theme.colors.neutral5};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    & {
      padding: 8px 12px;
    }
  }
`
const FakeButton = styled(Box)`
  width: 100%;
  height: 24px;
  cursor: pointer;
`
const Input = styled('input')`
  background: transparent;
  padding: 0;
  border: none;
  width: 0;
  height: 0;
  position: absolute;
  top: 0;
`
const Text = styled(Type.Body)`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 100%;
  color: ${({ theme }) => theme.colors.primary1};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    & {
      font-size: 14px;
    }
  }
`

function InputFile({ fileName, ...rest }: any) {
  const inputRef = useRef<HTMLInputElement>(null)
  const handleInputClick = () => {
    if (inputRef.current) {
      inputRef.current.click()
    }
  }

  return (
    <Wrapper>
      <FakeButton onClick={handleInputClick}>
        <Text>{fileName ? fileName : 'Attach Resume/Cv'}</Text>
      </FakeButton>
      <Input ref={inputRef} type="file" {...rest} accept=".docx,.doc,.pdf" />
    </Wrapper>
  )
}

export default InputFile
