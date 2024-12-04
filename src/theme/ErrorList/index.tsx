// eslint-disable-next-line no-restricted-imports
import { i18n } from '@lingui/core'
import { useEffect, useState } from 'react'
import styled, { DefaultTheme } from 'styled-components/macro'

import { Box, Type } from 'theme/base'

const ErrorListDot = styled.span<{ isDone?: boolean }>`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 8px;
  margin-right: 8px;
  flex: 0 0 8px;
  background: ${({ theme }: { theme: DefaultTheme }) => theme.colors.red1};
`
const ErrorListItem = styled.div`
  &:not(:first-child) {
    margin-top: 8px;
  }
  display: flex;
  align-items: center;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.red1};
`

const ErrorListWrapper = styled(Box)`
  background: ${({ theme }: { theme: DefaultTheme }) => `${theme.colors.red1}16`};
`

const ErrorList = ({ items, ...props }: { items: string[] }) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!items) {
      setVisible(false)
      return
    }

    setVisible(true)
    const timer = setTimeout(() => setVisible(false), 4000)

    return () => clearTimeout(timer)
  }, [items])

  if (!visible) return null
  return (
    <ErrorListWrapper
      px={3}
      py={2}
      sx={{
        borderRadius: 'md',
      }}
      {...props}
    >
      {items.map((item) => (
        <ErrorListItem key={item}>
          <ErrorListDot />
          <Type.Small>{i18n._(`${item.toString()}`)}</Type.Small>
        </ErrorListItem>
      ))}
    </ErrorListWrapper>
  )
}

export default ErrorList
