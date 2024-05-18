import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Header } from './components/Header'
import { GlobalStyles } from './styles/global'
import { ThemeProvider, useTheme } from './styles/theme-provider'

export function App() {
  const { theme } = useTheme()

  return (
    <HelmetProvider>
      <Helmet titleTemplate="%S | NeoKoros" />
      <ThemeProvider>
        <Header />
        <h1>{theme}</h1>
      </ThemeProvider>
      <GlobalStyles />
    </HelmetProvider>
  )
}
