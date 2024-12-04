import '@reach/dialog/styles.css'
import { LanguageProvider } from 'i18n'
import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
// eslint-disable-next-line no-restricted-imports
import 'react-toastify/dist/ReactToastify.css'
import reportWebVitals from 'reportWebVitals'
import ThemeProvider from 'theme'

import { GLOBAL_INITIAL_STATE, GlobalStoreProvider } from 'hooks/store/useGlobalStore'
import { LOCAL_INITIAL_STATE, LocalStoreProvider } from 'hooks/store/useLocalStore'
// import createMirageServer from 'mirage'
import App from 'pages/App'
import DarkModeUpdater from 'pages/DarkModeUpdater'
import ThemedGlobalStyle from 'theme/styles'

function Updaters() {
  return (
    <>
      <DarkModeUpdater />
    </>
  )
}
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      notifyOnChangeProps: 'tracked',
      refetchOnWindowFocus: false,
    },
  },
})

const container = document.getElementById('root') ?? document.body

const root = ReactDOMClient.createRoot(container)

root.render(
  <React.StrictMode>
    <GlobalStoreProvider initialState={GLOBAL_INITIAL_STATE}>
      <LocalStoreProvider initialState={LOCAL_INITIAL_STATE}>
        <QueryClientProvider client={queryClient}>
          <Updaters />
          <ThemeProvider>
            <ThemedGlobalStyle />
            <BrowserRouter>
              <LanguageProvider>
                <App />
              </LanguageProvider>
            </BrowserRouter>
          </ThemeProvider>
        </QueryClientProvider>
      </LocalStoreProvider>
    </GlobalStoreProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
