import { useEffect, useRef } from 'react'
import styled, { keyframes } from 'styled-components/macro'

import ActionButtons from 'components/common/ActionButtons'
import { TabsType } from 'pages/types'
import { Box } from 'theme/base'

//import usePublicLayoutGesture from './usePublicLayoutGesture'

const Container = styled(Box)`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: ${({ theme }) => theme.colors['neutral6']};
`
const SideBarContainer = styled(Box)`
  flex-shrink: 0;
  height: 100%;
  width: 250px;
  background-color: ${({ theme }) => theme.colors['neutral7']};
`
const SideBarMobileContainer = styled(Box)`
  flex-shrink: 0;
  width: 100%;
  height: 32px;
  background-color: ${({ theme }) => theme.colors['neutral5']};
  position: sticky;
  top: 0;
  z-index: 1;
  &::after {
    position: absolute;
    top: -100%;
    bottom: 100%;
    width: 100%;
    background-color: transparent;
    backdrop-filter: blur(2px);
    content: '';
  }
`
const wrapperAni = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
const ContentContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  min-height: 100%;
  animation: ${wrapperAni} 0.6s linear;
`

function MainContainer({
  tabs,
  currentTab,
  sideBarWeb,
  sideBarMobile,
  content,
  goNextHandler,
  goPrevHandler,
}: {
  tabs: TabsType
  currentTab: number
  sideBarWeb: () => React.ReactNode
  sideBarMobile: () => React.ReactNode
  content: () => React.ReactNode
  goNextHandler: (timeoutRef?: React.MutableRefObject<any>) => void
  goPrevHandler: (timeoutRef?: React.MutableRefObject<any>) => void
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    containerRef.current && containerRef.current.scrollTo({ top: 0, behavior: 'smooth' })
    contentRef.current && contentRef.current.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentTab])

  return (
    <Container ref={containerRef} p={[3, 3, 3, 0]} overflowY={['scroll', 'scroll', 'scroll', 'auto']}>
      <Box
        style={{
          position: 'relative',
          minHeight: '100%',
          width: '100%',
          display: 'flex',
        }}
        flexDirection={['column', 'column', 'column', 'row']}
        height={['auto', 'auto', 'auto', '100%']}
      >
        <SideBarContainer display={['none', 'none', 'none', 'block']}>{sideBarWeb()}</SideBarContainer>
        <SideBarMobileContainer display={['block', 'block', 'block', 'none']}>{sideBarMobile()}</SideBarMobileContainer>
        <ContentContainer
          ref={contentRef}
          p={[0, 0, 4]}
          pl={[0, 0, '48px']}
          pt={[4, 4, 4]}
          pb={[4, 4, 4]}
          flex="1"
          overflowY={['auto', 'auto', 'auto', 'scroll']}
        >
          {content()}
          <ActionButtons
            tabs={tabs}
            currentTab={currentTab}
            goPrevHandler={goPrevHandler}
            goNextHandler={goNextHandler}
          />
        </ContentContainer>
      </Box>
    </Container>
  )
}

export default MainContainer
