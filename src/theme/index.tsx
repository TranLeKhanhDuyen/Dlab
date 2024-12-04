import { ReactNode, useMemo } from 'react'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components/macro'

import { useIsDarkMode } from 'hooks/store/state/useDarkMode'
import theme from 'theme/theme'

// eslint-disable-next-line react/prop-types
export default function ThemeProvider({ children }: { children: ReactNode }) {
  const darkMode = useIsDarkMode()

  const themeObject = useMemo(() => theme(darkMode), [darkMode])

  return <StyledComponentsThemeProvider theme={themeObject}>{children}</StyledComponentsThemeProvider>
}
