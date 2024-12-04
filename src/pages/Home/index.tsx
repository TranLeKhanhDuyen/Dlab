import { Trans } from '@lingui/macro'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import MainContainer from 'components/layouts/PublicLayout/MainContainer'
import SideBarWeb, { SideBarMobile } from 'components/layouts/PublicLayout/SideBarContainer'
import { ContentComponentsType, TabType } from 'pages/types'
import { getInitTab } from 'utils/helpers'

import HomeTabs from './TabsContent'

const tabs = [
  { key: 0, name: 'why-us', value: <Trans>Why Us?</Trans> },
  { key: 1, name: 'our-projects', value: <Trans>Our Projects</Trans> },
  { key: 2, name: 'core-vaue', value: <Trans>Core Value</Trans> },
  { key: 3, name: 'tech-stack', value: <Trans>Tech Stack</Trans> },
]

const components: ContentComponentsType = {
  0: <HomeTabs.Home1 />,
  1: <HomeTabs.Home2 />,
  2: <HomeTabs.Home3 />,
  3: <HomeTabs.Home4 />,
}

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const [currentTab, setCurrentTab] = useState(getInitTab({ initTab: searchParams.get('section') || '', tabs }))

  // change tab to our partner when click on mobile menu
  useEffect(() => {
    if (searchParams.get('section') === tabs[3].name && currentTab !== 3) {
      setCurrentTab(3)
    }
  }, [searchParams, setCurrentTab, currentTab])
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

export default Home
