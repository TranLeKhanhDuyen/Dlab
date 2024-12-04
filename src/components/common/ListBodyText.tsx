import styled from 'styled-components/macro'

import Spacer from 'components/common/Spacer'
import { Box, Flex, Type } from 'theme/base'

const SquareNotation = styled(Box)`
  position: relative;
  width: 10px;
  height: 24px;
  flex-shrink: 0;
  &::after {
    display: inline-block;
    position: absolute;
    content: '';
    height: 10px;
    border: 1px solid white;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 10px;
  }
`

function ListBodyText({ listText, maxWidth = '800px' }: { listText: React.ReactNode[]; maxWidth?: string }) {
  return (
    <>
      <Flex maxWidth={maxWidth} flexDirection="column">
        {listText.map((text, index) => {
          return (
            <Flex key={index} alignItems="flex-start">
              <SquareNotation mr="2ch" />
              <Type.Body lineHeight="24px">{text}</Type.Body>
            </Flex>
          )
        })}
      </Flex>
    </>
  )
}

export function ListBodyTextWithTitle({
  heading,
  listText,
  color,
}: {
  heading: React.ReactNode
  listText: React.ReactNode[]
  color?: string
}) {
  return (
    <>
      <Type.H4 color={color}>{heading}</Type.H4>
      <Spacer mb="24px" />
      <Flex maxWidth="800px" flexDirection="column">
        {listText.map((text, index) => {
          return (
            <Flex key={index} alignItems="flex-start">
              <SquareNotation mr="2ch" />
              <Type.Body lineHeight="24px">{text}</Type.Body>
            </Flex>
          )
        })}
      </Flex>
    </>
  )
}

export default ListBodyText
