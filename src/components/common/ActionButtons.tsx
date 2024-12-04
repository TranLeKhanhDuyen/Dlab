import { ArrowLeft, ArrowRight } from 'iconsax-react'
import styled from 'styled-components/macro'

import { TabsType } from 'pages/types'
import ButtonWithIcon from 'theme/Button/ButtonWithIcon'
import { Flex, Type } from 'theme/base'

const CustomButton = styled(ButtonWithIcon)`
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  border-color: ${({ theme }) => theme.colors.neutral4};
  &:hover {
    background: ${({ theme }) => theme.colors.neutral4};
  }
`
const TypeSmallBold = styled(Type.Caption)`
  font-weight: 700;
  max-width: 300px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

function ActionButtons({
  tabs,
  currentTab,
  goNextHandler,
  goPrevHandler,
}: {
  tabs: TabsType
  currentTab: number
  goNextHandler: () => void
  goPrevHandler: () => void
}) {
  return (
    <Flex justifyContent={['space-between', 'flex-start']} sx={{ gap: 24, flexWrap: 'wrap' }}>
      {tabs[currentTab - 1] && (
        <CustomButton key={currentTab - 1} onClick={goPrevHandler} variant="outline" icon={<ArrowLeft />}>
          <TypeSmallBold>{tabs[currentTab - 1].value}</TypeSmallBold>
        </CustomButton>
      )}
      {tabs[currentTab + 1] && (
        <CustomButton
          direction="right"
          key={currentTab + 1}
          onClick={goNextHandler}
          variant="outline"
          icon={<ArrowRight />}
        >
          <TypeSmallBold>{tabs[currentTab + 1].value}</TypeSmallBold>
        </CustomButton>
      )}
    </Flex>
  )
}

export default ActionButtons
