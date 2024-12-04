/* eslint-disable  @typescript-eslint/no-non-null-assertion */
import { useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components/macro'

import { PageType, PagesType } from 'pages/Home/types'
import { Box } from 'theme/base'
import ROUTES from 'utils/routes'

const pages: PagesType = [
  { key: 0, value: 'Home', path: ROUTES.HOME.path },
  { key: 1, value: 'Projects', path: ROUTES.HOME.path, search: '?section=our-projects' },
  { key: 2, value: 'Career', path: ROUTES.CAREER.path },
  { key: 3, value: 'Contact', path: ROUTES.CONTACT.path },
]

const NavigationWrapper = styled(Box)`
  height: 50px;
  position: absolute;
  bottom: 0;
  left: 250px;
  text-align: center;
  width: 600px;
`
const MobileNavigationWrapper = styled(Box)`
  position: relative;
  width: 100%;
`
type NavigationItemProps = {
  page: PageType
  currentPage: PageType
}
const NavigationItem = styled(Box).withConfig({
  shouldForwardProp: (props) => !['page', 'currentPage'].includes(props),
})<NavigationItemProps>`
  background-color: ${({ theme, page, currentPage }) =>
    page.path === currentPage.path ? theme.colors['neutral6'] : theme.colors['neutral7']};
  width: 100%;
  max-width: 200px;
  line-height: 50px;
  border: 2px solid ${({ theme }) => theme.colors.neutral8};
  border-left: none;
  border-bottom: ${({ page, currentPage }) => (page.path === currentPage.path ? 'none' : '')};
  color: ${({ theme, page, currentPage }) => (page.path === currentPage.path ? 'white' : theme.colors['neutral4'])};
  font-weight: 700;
`

const MobileNavigationItem = styled(Box).withConfig({
  shouldForwardProp: (props) => !['page', 'currentPage'].includes(props),
})<NavigationItemProps>`
  display: block;
  line-height: 50px;
  text-align: center;
  color: ${({ theme, page, currentPage }) =>
    (page.path + page.search || '') === (currentPage.path + currentPage.search || '')
      ? 'white'
      : theme.colors['neutral4']};

  font-weight: 700;
  background-color: ${({ theme, page, currentPage }) =>
    (page.path + page.search || '') === (currentPage.path + currentPage.search || '')
      ? theme.colors['neutral8']
      : 'transparent'};
`

export const boxDisplay = ['none', 'none', 'none', 'flex']

function Navigation() {
  const { pathname } = useLocation()
  const webPages = useMemo(() => {
    const newPages = [...pages]
    newPages.splice(1, 1)
    return newPages
  }, [])
  const currentPage = webPages.find((page) => {
    if (page.path !== ROUTES.HOME.path) {
      return !!pathname.includes(page.path)
    }
    return pathname == page.path
  })

  return (
    <NavigationWrapper display={boxDisplay}>
      {webPages.map((page) => {
        return (
          <NavigationItem fontSize={2} as={Link} to={page.path} page={page} currentPage={currentPage!} key={page.key}>
            {page.value}
          </NavigationItem>
        )
      })}
    </NavigationWrapper>
  )
}

export function MobileNavigation({ onPageChange }: { onPageChange: () => void }) {
  const { pathname, search } = useLocation()
  const currentPage = useMemo(() => {
    if (pathname === ROUTES.HOME.path) {
      if (search === pages[1].search) {
        return pages[1]
      }
      return pages[0]
    }

    return pages.find((page) => {
      return !!pathname.includes(page.path) && page.path !== ROUTES.HOME.path
    })
  }, [pathname, search])

  const linkTo = (page: PageType) => {
    if (pathname === page.path && !!search) {
      return page.path + search
    }
    if (pathname === page.path && !search) {
      return page.path + (page.search || '')
    }
    return page.path + (page.search || '')
  }

  return (
    <MobileNavigationWrapper>
      {pages.map((page) => {
        return (
          <MobileNavigationItem
            fontSize={2}
            as={Link}
            to={linkTo(page)}
            onClick={() => {
              onPageChange()
            }}
            page={page}
            currentPage={currentPage!}
            key={page.key}
          >
            {page.value}
          </MobileNavigationItem>
        )
      })}
    </MobileNavigationWrapper>
  )
}

export default Navigation
