import styled from 'styled-components/macro'
import { LayoutProps, TypographyProps, layout, typography } from 'styled-system'

import { TabType, TabsType } from 'pages/types'
import { Flex, Type } from 'theme/base'

type ButtonProps = {
  currentTabKey: number
  tabKey: number
}
const ContainerMobile = styled(Flex)`
  padding: 0 24px;
  align-items: center;
  height: 100%;
  position: relative;
`
const ButtonMobile = styled.button<ButtonProps & LayoutProps & TypographyProps>`
  text-align: left;
  overflow: hidden;
  text-overflow: ${({ currentTabKey, tabKey }) => (currentTabKey === tabKey ? 'ellipsis' : 'clip')};
  white-space: nowrap;
  cursor: pointer;
  background-color: transparent;
  color: ${({ currentTabKey, tabKey, theme }) => (currentTabKey === tabKey ? 'white' : theme.colors.neutral3)};
  height: 100%;
  width: ${({ currentTabKey, tabKey }) => (currentTabKey === tabKey ? '100%' : '32px')};
  ${layout}
  ${typography}
`
const ButtonWeb = styled.button<ButtonProps & LayoutProps & TypographyProps>`
  display: block;
  background-color: ${({ theme, currentTabKey, tabKey }) =>
    currentTabKey === tabKey ? theme.colors.neutral4 : 'transparent'};
  color: white;
  height: 32px;
  line-height: 32px;
  width: 100%;
  padding-left: 24px;
  text-align: left;
  ${layout}
  ${typography}
`

type SideBarTabsProps = {
  tabs: TabsType
  currentTab: number
  onTabChange: (tab: TabType) => void
}

export function SideBarMobile({ tabs, currentTab, onTabChange }: SideBarTabsProps) {
  return (
    <ContainerMobile>
      {tabs.map((tab) => {
        return (
          <ButtonMobile key={tab.key} currentTabKey={currentTab} tabKey={tab.key} onClick={() => onTabChange(tab)}>
            {+tab.key + 1}
            {currentTab === tab.key ? '. ' : ''}
            {currentTab === tab.key ? tab.value : ''}
          </ButtonMobile>
        )
      })}
    </ContainerMobile>
  )
}

function SideBarWeb({ tabs, currentTab, onTabChange }: SideBarTabsProps) {
  return (
    <>
      <Type.Small fontWeight={700} color="neutral4" pl="24px" height="32px" lineHeight="32px">
        OUTLINE
      </Type.Small>
      {tabs.map((tab) => {
        return (
          <ButtonWeb currentTabKey={currentTab} tabKey={tab.key} key={tab.key} onClick={() => onTabChange(tab)}>
            <Type.Caption>
              {+tab.key + 1 + '. '}
              {tab.value}
            </Type.Caption>
          </ButtonWeb>
        )
      })}
    </>
  )
}

export default SideBarWeb
