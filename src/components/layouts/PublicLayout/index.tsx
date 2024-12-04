import { useResponsive } from '@umijs/hooks'
import { useState } from 'react'
import { BsTelegram } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components/macro'

// import { ReactComponent as LangVNIcon } from 'assets/icons/lang_vn.svg'
import { ReactComponent as Logo } from 'assets/logo.svg'
// import { useUserLocaleManager } from 'hooks/store/state/useLocale'
// import Dropdown, { DropdownItem } from 'theme/Dropdown'
import Modal from 'theme/Modal'
import { Box, Flex, Type } from 'theme/base'
import ROUTES from 'utils/routes'

import Navigation, { MobileNavigation, boxDisplay } from './Navigation'

const viewportHeight = '100%'
const headerHeight = '80px'
const footerHeight = '32px'
const sidebarWidth = '250px'
const navWidth = '600px'
const navHeight = '50px'

const GlobalStyle = createGlobalStyle`
  body {
    overscroll-behavior-y: contain;
  }
`

const HeaderContainer = styled(Flex)`
  position: relative;
  height: ${headerHeight};
  align-items: center;
  justify-content: space-between;

  & .header__border-bottom__left {
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${sidebarWidth};
    height: 2px;
    background-image: linear-gradient(90deg, rgba(8, 230, 165, 0) 0%, #08e6a5 33.33%, #27daf6 66.15%, #3e8aff 100%);
    opacity: 0.5;
    transform: matrix(1, 0, 0, -1, 0, 0);
  }
  & .header__border-bottom__right {
    position: absolute;
    bottom: 0;
    left: calc(${sidebarWidth} + ${navWidth} - 2px);
    width: calc(100% - ${sidebarWidth} - ${navWidth});
    height: 2px;
    background-image: linear-gradient(90deg, #08e6a5 0%, #27daf6 32.29%, #3e8aff 64.06%, rgba(62, 138, 255, 0) 100%);
    opacity: 0.5;
    transform: matrix(1, 0, 0, -1, 0, 0);
  }
  & .header-nav__border-left {
    position: absolute;
    bottom: 2px;
    left: calc(${sidebarWidth} - 2px);
    width: 2px;
    height: calc(${navHeight} - 2px);
    background-image: linear-gradient(180deg, #08e6a5 0%, #27daf6 50%, #3e8aff 100%);
    opacity: 0.5;
  }
  & .header-nav__border-top {
    position: absolute;
    bottom: calc(${navHeight} - 2px);
    left: calc(${sidebarWidth});
    width: calc(${navWidth} - 2px);
    height: 2px;
    background-image: linear-gradient(90deg, #08e6a5 0%, #27daf6 50%, #3e8aff 100%);
    opacity: 0.5;
    transform: matrix(1, 0, 0, -1, 0, 0);
  }
  & .header-nav__border-right {
    position: absolute;
    bottom: 2px;
    left: calc(${sidebarWidth} + ${navWidth} - 2px);
    width: 2px;
    height: calc(${navHeight} - 2px);
    background-image: linear-gradient(0deg, #08e6a5 0%, #27daf6 50%, #3e8aff 100%);
    opacity: 0.5;
  }
`

const HamburgerMenu = styled(GiHamburgerMenu)`
  cursor: pointer;
  display: none;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    & {
      display: block;
    }
  }
`
const FooterContainer = styled(Box)`
  padding: 0 16px;
  align-item: center;
  justify-content: space-between;
  height: ${footerHeight};
  & * {
    line-height: ${footerHeight};
  }
`
// const LanguageItem = styled(DropdownItem)<{ $lang: string; $currentLang: string }>`
//   background: ${({ theme, $lang, $currentLang }) => ($lang === $currentLang ? theme.colors.neutral6 : 'transparent')};
// `
const MainContainer = styled(Box).attrs({ as: 'main' })`
  width: 100%;
`

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const modalOpenHandler = () => {
    setIsModalOpen((prev) => !prev)
  }

  const { lg } = useResponsive()

  // const [locale, setLocale] = useUserLocaleManager()
  // const changeLocaleHandler = (locale: 'en' | 'fr') => setLocale(locale)

  return (
    <HeaderContainer px={4}>
      <Flex alignItems="center">
        <Link style={{ height: '32px' }} to={ROUTES.HOME.path}>
          <Logo />
        </Link>
      </Flex>
      <Flex alignItems="center" sx={{ gap: 24 }}>
        {/* <Dropdown
          direction="right"
          showArrow={false}
          buttonSx={{
            border: 'none',
            marginRight: '16px',
            padding: '0',
          }}
          menu={
            <>
              <LanguageItem $currentLang={locale} $lang="fr" onClick={() => changeLocaleHandler('fr')}>
                Vietnamese
              </LanguageItem>
              <LanguageItem $currentLang={locale} $lang="en" onClick={() => changeLocaleHandler('en')}>
                English
              </LanguageItem>
            </>
          }
        >
          <Box height="20px">
            <LangVNIcon />
          </Box>20
        </Dropdown> */}

        <Flex alignItems="center" as="a" href="https://t.me/vietdn" target="_blank" color="neutral1">
          <BsTelegram size={lg ? 32 : 24} />
        </Flex>
        <HamburgerMenu onClick={modalOpenHandler} />
        <Modal isOpen={isModalOpen} hasClose onDismiss={modalOpenHandler}>
          <MobileNavigation onPageChange={modalOpenHandler} />
        </Modal>
      </Flex>
      <Navigation />
      <Box display={boxDisplay} className="header__border-bottom__left" />
      <Box display={boxDisplay} className="header__border-bottom__right" />
      <Box display={boxDisplay} className="header-nav__border-left" />
      <Box display={boxDisplay} className="header-nav__border-top" />
      <Box display={boxDisplay} className="header-nav__border-right" />
    </HeaderContainer>
  )
}

export function Footer() {
  return (
    <FooterContainer display={boxDisplay}>
      <Type.Caption>2022 © Decentralab Pte</Type.Caption>
      <Type.Caption>160 Robinson Road, #14-04 Singapore</Type.Caption>
    </FooterContainer>
  )
}

export function Main({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GlobalStyle />
      <MainContainer
        height={[
          `calc(${viewportHeight} - ${headerHeight})`,
          `calc(${viewportHeight} - ${headerHeight})`,
          `calc(${viewportHeight} - ${headerHeight})`,
          `calc(${viewportHeight} - ${headerHeight} - ${footerHeight})`,
        ]}
      >
        {children}
      </MainContainer>
    </>
  )
}

function PublicLayout() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  )
}

export default PublicLayout
