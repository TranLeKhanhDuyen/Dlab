import React, { Suspense, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import PublicLayout from 'components/layouts/PublicLayout'
import { useDarkModeManager, useIsDarkMode } from 'hooks/store/state/useDarkMode'
import Loading from 'theme/Loading'
import { Box } from 'theme/base'
import ROUTES from 'utils/routes'

import Career from './Career'
import CareerIntroduction from './Career/TabsContent/Career1'
import CareerDetail from './Career/TabsContent/Career2'
import Contact from './Contact'
import Home from './Home'
import QSReader from './QSReader'

function App() {
  const isDarkMode = useIsDarkMode()

  const { setUserDarkMode } = useDarkModeManager()
  useEffect(() => {
    setUserDarkMode(true)
  }, [setUserDarkMode])

  return (
    <>
      <Suspense
        fallback={
          <Box p={4}>
            <Loading />
          </Box>
        }
      >
        <QSReader />
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path={ROUTES.HOME.path} element={<Home />} />
            <Route path={ROUTES.CONTACT.path} element={<Contact />} />
            <Route path={ROUTES.CAREER.path} element={<Career />}>
              <Route path="" element={<CareerIntroduction />} />
              <Route path=":job" element={<CareerDetail />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer theme={isDarkMode ? 'dark' : 'light'} limit={3} />
    </>
  )
}

export default App
