import { Trans } from '@lingui/macro'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import MainContainer from 'components/layouts/PublicLayout/MainContainer'
import SideBarWeb, { SideBarMobile } from 'components/layouts/PublicLayout/SideBarContainer'
import { ContentComponentsType, TabType } from 'pages/types'
import { getInitTab } from 'utils/helpers'

import ContactTabs from './TabsContent'

const tabs = [
  { key: 0, name: 'company-info', value: <Trans>Company Info</Trans> },
  { key: 1, name: 'be-decentraler', value: <Trans>Be Decentraler</Trans> },
]

const components: ContentComponentsType = {
  0: <ContactTabs.Contact1 />,
  1: <ContactTabs.Contact2 />,
}

function Contact() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [currentTab, setCurrentTab] = useState(getInitTab({ initTab: searchParams.get('section') || '', tabs }))

  const sideBarClickHandler = (tab: TabType) => {
    setCurrentTab(tab.key)
    if (!tab['name']) return
    setSearchParams({ section: tab.name })
  }

  const goNextHandler = (timeoutRef?: React.MutableRefObject<any>) => {
    setCurrentTab((prev) => {
      if (timeoutRef) {
        timeoutRef.current = null
      }
      if (prev >= tabs.length - 1) {
        setSearchParams({ section: tabs[prev].name })
        return prev
      }
      setSearchParams({ section: tabs[prev + 1].name })
      return prev + 1
    })
  }
  const goPrevHandler = (timeoutRef?: React.MutableRefObject<any>) => {
    setCurrentTab((prev) => {
      if (timeoutRef) {
        timeoutRef.current = null
      }
      if (prev <= 0) {
        setSearchParams({ section: tabs[prev].name })
        return prev
      }
      setSearchParams({ section: tabs[prev - 1].name })
      return prev - 1
    })
  }

  const component = () => components[currentTab]

  const sideBarWeb = () => {
    return <SideBarWeb tabs={tabs} currentTab={currentTab} onTabChange={sideBarClickHandler} />
  }
  const sideBarMobile = () => {
    return <SideBarMobile tabs={tabs} currentTab={currentTab} onTabChange={sideBarClickHandler} />
  }

  return (
    <MainContainer
      tabs={tabs}
      currentTab={currentTab}
      sideBarWeb={sideBarWeb}
      sideBarMobile={sideBarMobile}
      content={component}
      goNextHandler={goNextHandler}
      goPrevHandler={goPrevHandler}
    />
  )
}

export default Contact
