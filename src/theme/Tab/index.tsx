import css, { SystemStyleObject } from '@styled-system/css'
import React, { ReactElement, ReactNode, useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import { GridProps } from 'styled-system'

import { Box, sx } from 'theme/base'
import { SxProps } from 'theme/types'

import TabItem from './TabItem'

type TabPaneProps = {
  children: ReactElement | ReactElement[] | string
  active?: boolean
  tab: ReactNode
  key: string
}

type TabsProps = {
  children: ReactElement[] | ReactElement
  defaultActiveKey?: string
  block?: boolean
  onChange?: (key?: string) => void
  borderNone?: boolean
  sxChildren?: SystemStyleObject & GridProps
  sx?: SystemStyleObject & GridProps
  setTab?: React.Dispatch<React.SetStateAction<string>>
} & SxProps

export const TabPane = styled.div<TabPaneProps>`
  display: ${(props) => (props.active ? 'block' : 'none')};
`

const TabsWrapper = styled(Box)<SxProps & any>(
  ({ block, borderNone = false }: { block?: boolean; borderNone?: boolean }) =>
    css({
      display: 'flex',
      p: borderNone ? 0 : '8px',
      border: borderNone ? 'none' : '2px solid',
      borderColor: 'neutral6',
      borderRadius: '16px',
      width: block ? '100%' : 'fit-content',
      marginBottom: borderNone ? '2em' : '1em',
      '& > *:not(:last-child)': {
        marginRight: borderNone ? '1em' : 0,
      },
    }),
  sx
)

const Tabs = ({
  children,
  defaultActiveKey,
  block,
  borderNone = false,
  sx,
  sxChildren,
  setTab,
  onChange,
}: TabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultActiveKey)
  const [defaultActiveTab, setDefaultActiveTab] = useState(defaultActiveKey)

  useEffect(() => {
    if (defaultActiveKey !== defaultActiveTab) {
      setDefaultActiveTab(defaultActiveKey)
      setActiveTab(defaultActiveKey)
    }
  }, [defaultActiveKey, defaultActiveTab])

  const elements = children as ReactElement[]
  if (elements.length) {
    const tabs = elements
      .filter((c: ReactElement) => c.props.active !== false)
      .map((c: ReactElement) => ({
        key: c.key?.toString(),
        name: c.props.tab,
      }))

    return (
      <Box sx={sx}>
        <TabsWrapper block={block} borderNone={borderNone}>
          {tabs.map((tab) => (
            <TabItem
              type="button"
              onClick={() => {
                setActiveTab(tab.key)
                onChange && onChange(tab?.key?.toString())
                if (setTab && tab?.key) setTab(tab.key)
              }}
              active={activeTab === tab.key}
              key={tab.key}
              sx={{
                flex: '1 1 auto',
              }}
              additionalStyles={sxChildren}
            >
              {tab.name}
            </TabItem>
          ))}
        </TabsWrapper>
        {elements.map((c: ReactElement) => React.cloneElement(c, { active: activeTab === c.key?.toString() }))}
      </Box>
    )
  }
  const child = children as ReactElement
  return (
    <div>
      <TabsWrapper block={block}>
        <TabItem active={true} key={child.key} type="button">
          {child.props.tab}
        </TabItem>
      </TabsWrapper>
      {React.cloneElement(child, { active: true })}
    </div>
  )
}

export default Tabs
