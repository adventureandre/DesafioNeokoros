import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Header } from './components/Header'
import { GlobalStyles } from './styles/global'
import { ThemeProvider } from './styles/theme-provider'
import { AppRouter } from './routes'
import { AuthProvider } from './context/auth'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%S | NeoKoros" />
      <ThemeProvider>
        <AuthProvider>
          <Header />
          <AppRouter />
        </AuthProvider>
      </ThemeProvider>
      <GlobalStyles />
    </HelmetProvider>
  )
}
